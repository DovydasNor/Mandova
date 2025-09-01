import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from "ogl";
import { useEffect, useRef, useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import dazyklos_kabykla2 from '../assets/Gallery/dazyklos kabykla2.webp';
import dazyklos_kabykla3 from '../assets/Gallery/dazyklos kabykla3.webp';
import letnykas1 from '../assets/Gallery/letnykas1.webp';
import letnykas2 from '../assets/Gallery/letnykas2.webp';
import nerza from '../assets/Gallery/nerza.webp';
import surenkamos_lentynos1 from '../assets/Gallery/surenkamos lentynos1.webp';
import surenkamos_lentynos2 from '../assets/Gallery/surenkamos lentynos2.webp';
import vartai from '../assets/Gallery/vartai.webp';
import vartai190 from '../assets/Gallery/vartai190.webp';
import vartai190_2 from '../assets/Gallery/vartai190_2.webp';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== "constructor" && typeof instance[key] === "function") {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function createTextTexture(gl, text, font = "bold 30px monospace", color = "black") {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;
  context.font = font;
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

class Title {
  constructor({ gl, plane, renderer, text, textColor = "#545050", font = "30px sans-serif" }) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
    this.createMesh();
  }
  createMesh() {
    const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true,
    });
    this.mesh = new Mesh(this.gl, { geometry, program });
    const aspect = width / height;
    const textHeight = this.plane.scale.y * 0.15;
    const textWidth = textHeight * aspect;
    this.mesh.scale.set(textWidth, textHeight, 1);
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05;
    this.mesh.setParent(this.plane);
  }
}

class Media {
  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font,
  }) {
    this.extra = 0;
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }
  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: false });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          if(d > 0.0) {
            discard;
          }
          
          gl_FragColor = vec4(color.rgb, 1.0);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius },
      },
      transparent: true,
    });
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
    };
  }
  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }
  createTitle() {
    this.title = new Title({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      text: this.text,
      textColor: this.textColor,
      fontFamily: this.font,
    });
  }
  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = this.speed;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === "right" && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === "left" && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }
  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      if (this.plane.program.uniforms.uViewportSizes) {
        this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
      }
    }
    this.scale = this.screen.height / 1500;
    this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width;
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
    this.padding = 2;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

class App {
  constructor(
    container,
    {
      items,
      bend,
      textColor = "#ffffff",
      borderRadius = 0,
      font = "bold 30px Figtree",
      scrollSpeed = 2,
      scrollEase = 0.05,
      t
    } = {}
  ) {
    document.documentElement.classList.remove("no-js");
    this.container = container;
    this.scrollSpeed = scrollSpeed;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck, 200);
    this.t = t;
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
    this.modalOpen = false;
    this.modalIndex = 0;
    this.swipeStartX = null;
    this.swipeDeltaX = 0;
    this.swipeActive = false;
  }
  createRenderer() {
    this.renderer = new Renderer({ alpha: true });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }
  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }
  createScene() {
    this.scene = new Transform();
  }
  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100,
    });
  }

  createMedias(items, bend = 1, textColor, borderRadius, font) {
    const t = this.t;
    const defaultItems = [
      { image: dazyklos_kabykla2, text: t('gallery.stalazas_dazyklai') },
      { image: dazyklos_kabykla3, text: t('gallery.stalazas_dazyklai') },
      { image: letnykas1, text: t('gallery.aliuminis_ratas') },
      { image: letnykas2, text: t('gallery.aliuminis_ratas') },
      { image: nerza, text: t('gallery.nerudijancio_konstrukcija') },
      { image: surenkamos_lentynos1, text: t('gallery.surenkamos_lentynos') },
      { image: surenkamos_lentynos2, text: t('gallery.surenkamos_lentynos') },
      { image: vartai, text: t('gallery.stumdomi_vartai') },
      { image: vartai190, text: t('gallery.stumdomi_vartai') },
      { image: vartai190_2, text: t('gallery.stumdomi_vartai') },
    ];
    const galleryItems = items && items.length ? items : defaultItems;
    this.mediasImages = galleryItems.concat(galleryItems);
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.text,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font,
      });
    });
  }
  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientX : e.clientX;
  }
  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * (this.scrollSpeed * 0.025);
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp() {
    this.isDown = false;
    this.onCheck();
  }
  onWheel(e) {
    const delta = e.deltaY || e.wheelDelta || e.detail;
    this.scroll.target += delta > 0 ? this.scrollSpeed : -this.scrollSpeed;
    this.onCheckDebounce();
  }
  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }
  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height,
    });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.medias) {
      this.medias.forEach((media) => media.onResize({ screen: this.screen, viewport: this.viewport }));
    }
  }
  update() {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? "right" : "left";
    if (this.medias) {
      this.medias.forEach((media) => media.update(this.scroll, direction));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }
  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);
    window.addEventListener("resize", this.boundOnResize);
    window.addEventListener("mousewheel", this.boundOnWheel);
    window.addEventListener("wheel", this.boundOnWheel);
    window.addEventListener("mousedown", this.boundOnTouchDown);
    window.addEventListener("mousemove", this.boundOnTouchMove);
    window.addEventListener("mouseup", this.boundOnTouchUp);
    window.addEventListener("touchstart", this.boundOnTouchDown);
    window.addEventListener("touchmove", this.boundOnTouchMove);
    window.addEventListener("touchend", this.boundOnTouchUp);
  }
  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.boundOnResize);
    window.removeEventListener("mousewheel", this.boundOnWheel);
    window.removeEventListener("wheel", this.boundOnWheel);
    window.removeEventListener("mousedown", this.boundOnTouchDown);
    window.removeEventListener("mousemove", this.boundOnTouchMove);
    window.removeEventListener("mouseup", this.boundOnTouchUp);
    window.removeEventListener("touchstart", this.boundOnTouchDown);
    window.removeEventListener("touchmove", this.boundOnTouchMove);
    window.removeEventListener("touchend", this.boundOnTouchUp);
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 30px Figtree",
  scrollSpeed = 2,
  scrollEase = 0.05,
}) {
  const containerRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const { t } = useTranslation();
  const galleryItems = useMemo(() => {
    if (items && items.length) {
      return items.map(item => ({ ...item, text: t(item.text) }));
    }
    return [
      { image: dazyklos_kabykla2, text: t('gallery.stalazas_dazyklai') },
      { image: dazyklos_kabykla3, text: t('gallery.stalazas_dazyklai') },
      { image: letnykas1, text: t('gallery.aliuminis_ratas') },
      { image: letnykas2, text: t('gallery.aliuminis_ratas') },
      { image: nerza, text: t('gallery.nerudijancio_konstrukcija') },
      { image: surenkamos_lentynos1, text: t('gallery.surenkamos_lentynos') },
      { image: surenkamos_lentynos2, text: t('gallery.surenkamos_lentynos') },
      { image: vartai, text: t('gallery.stumdomi_vartai') },
      { image: vartai190, text: t('gallery.stumdomi_vartai') },
      { image: vartai190_2, text: t('gallery.stumdomi_vartai') },
    ];
  }, [t, items]);

  useEffect(() => {
    const app = new App(containerRef.current, { items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, t });
    const canvas = containerRef.current?.querySelector('canvas');
    function onStart(e) {
      let point = null;
      if (e.touches && e.touches.length > 0) {
        point = e.touches[0];
      } else if ('screenX' in e && 'screenY' in e) {
        point = e;
      }
      if (point) {
        dragStartPos.current = { x: point.screenX, y: point.screenY };
      }
    }
    function onStop(e) {
      let point = null;
      if (e.touches && e.touches.length > 0) {
        point = e.touches[0];
      } else if ('screenX' in e && 'screenY' in e) {
        point = e;
      }
      if (!point || dragStartPos.current.x === undefined || dragStartPos.current.y === undefined) return;
      const dragX = Math.abs(dragStartPos.current.x - point.screenX);
      const dragY = Math.abs(dragStartPos.current.y - point.screenY);
      if (dragX < 5 && dragY < 5) {
        if (app.medias && app.medias.length) {
          const width = app.medias[0].width;
          let idx = Math.round(Math.abs(app.scroll.current) / width);
          if (app.scroll.current < 0) idx = -idx;
          const activeIdx = ((idx % galleryItems.length) + galleryItems.length) % galleryItems.length;
          setModalIdx(activeIdx);
          setModalOpen(true);
          setTimeout(() => setModalVisible(true), 10);
        }
      } else {
        // Drag detected, do not open modal
      }
    }
    if (canvas) {
      canvas.addEventListener('mousedown', onStart);
      canvas.addEventListener('touchstart', onStart);
      canvas.addEventListener('mouseup', onStop);
      canvas.addEventListener('touchend', onStop);
    }
    return () => {
      app.destroy();
      if (canvas) {
        canvas.removeEventListener('mousedown', onStart);
        canvas.removeEventListener('touchstart', onStart);
        canvas.removeEventListener('mouseup', onStop);
        canvas.removeEventListener('touchend', onStop);
      }
    };
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, galleryItems.length, t]);

  function handleCloseModal() {
    setModalVisible(false);
    setTimeout(() => {
      setModalOpen(false);
      setModalIdx(null);
    }, 300);
  }

  return (
    <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing relative" ref={containerRef}>
      {modalOpen && modalIdx !== null && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md transition-all duration-300 ${modalVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleCloseModal}
        >
          <div
            className={`flex flex-col items-center relative transition-all duration-300 ${modalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={e => e.stopPropagation()}
            style={{ minWidth: '320px' }}
          >
            <button
              className="absolute top-2 right-2 text-orange text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
              style={{ color: '#ff9900' }}
              onClick={handleCloseModal}
              aria-label={t('gallery.close')}
            >
              &#10005;
            </button>
            
            <button
              className="cursor-pointer text-orange absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-opacity-100 z-10"
              style={{ left: 0 }}
              onClick={() => setModalIdx((modalIdx - 1 + galleryItems.length) % galleryItems.length)}
              aria-label={t('gallery.prev')}
            >
              <span className="material-icons" style={{ fontSize: '2.2rem', color: '#ff9900' }}>arrow_back_ios_new</span>
            </button>
            
            <button
              className="cursor-pointer text-orange absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl font-bold  rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-opacity-100 z-10"
              style={{ right: 0 }}
              onClick={() => setModalIdx((modalIdx + 1) % galleryItems.length)}
              aria-label={t('gallery.next')}
            >
              <span className="material-icons" style={{ fontSize: '2.2rem', color: '#ff9900' }}>arrow_forward_ios</span>
            </button>
            <img src={galleryItems[modalIdx].image} alt={galleryItems[modalIdx].text} className="w-full h-auto rounded mb-4" style={{maxHeight: '90vh', width: 'auto', maxWidth: '90vw'}} />
            <span className="block text-xl font-bold text-orange mb-2 text-center drop-shadow-lg">{galleryItems[modalIdx].text}</span>
          </div>
        </div>
      )}
    </div>
  );
}

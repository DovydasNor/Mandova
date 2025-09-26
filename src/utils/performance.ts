// Performance monitoring utilities
export const measurePerformance = (): void => {
  // Basic performance measurement using native APIs
  const measureBasicMetrics = (): void => {
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      // Measure page load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
        console.log('DNS Lookup Time:', navigation.domainLookupEnd - navigation.domainLookupStart);
      }

      // Measure resource loading times
      const resources = performance.getEntriesByType('resource');
      resources.forEach((resource: PerformanceEntry) => {
        const resourceTiming = resource as PerformanceResourceTiming;
        if (resource.name.includes('.webp') || resource.name.includes('.js') || resource.name.includes('.css')) {
          console.log(`${resource.name}: ${resourceTiming.responseEnd - resourceTiming.requestStart}ms`);
        }
      });
    }
  };

  if (typeof window !== 'undefined' && 'performance' in window) {
    // Wait for page load before measuring
    if (document.readyState === 'complete') {
      measureBasicMetrics();
    } else {
      window.addEventListener('load', measureBasicMetrics);
    }
  }
};

// Prefetch resources on idle
export const prefetchOnIdle = (urls: string[]): void => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      urls.forEach((url: string) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      urls.forEach((url: string) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    }, 2000);
  }
};

// Optimize third-party scripts loading
export const optimizeThirdPartyScripts = (): void => {
  // Delay non-critical scripts
  const delayNonCriticalScripts = (): void => {
    const scripts: string[] = [
      'https://consent.cookiebot.com/uc.js',
      'https://consent.cookiebot.com/cd.js'
    ];
    
    scripts.forEach((src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
    });
  };

  // Load scripts after user interaction or page load
  const events: string[] = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
  const loadScripts = (): void => {
    delayNonCriticalScripts();
    events.forEach((event: string) => {
      document.removeEventListener(event, loadScripts);
    });
  };

  // Load on first user interaction or after 5 seconds
  events.forEach((event: string) => {
    document.addEventListener(event, loadScripts, { passive: true });
  });
  
  setTimeout(loadScripts, 5000);
};

// Resource loading optimization
export const optimizeResourceLoading = (): void => {
  // Preload critical resources
  const criticalResources: string[] = [
    '/src/assets/welding-work-with-metal-construction-busy-metal-factory.webp',
    '/src/assets/Mandova_logo_trans.webp'
  ];

  criticalResources.forEach((resource: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = 'image';
    link.type = 'image/webp';
    document.head.appendChild(link);
  });

  // Prefetch non-critical resources on idle
  const nonCriticalResources: string[] = [
    '/src/assets/Gallery/vartai.webp',
    '/src/assets/Gallery/surenkamos lentynos1.webp',
    '/src/assets/expertise.webp',
    '/src/assets/diploma.webp'
  ];

  prefetchOnIdle(nonCriticalResources);
};

// Service Worker registration for caching
export const registerServiceWorker = (): void => {
  if ('serviceWorker' in navigator && (import.meta as any).env?.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};
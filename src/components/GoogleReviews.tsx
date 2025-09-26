import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const GoogleReviews: React.FC = () => {
	const { i18n } = useTranslation();
	const widgetRef = useRef<HTMLDivElement>(null);
	const scriptLoadedRef = useRef<boolean>(false);

	const loadShapoWidget = () => {
		console.log('loadShapoWidget called, Shapo available:', !!(window as any).Shapo);
		console.log('Widget ref current:', !!widgetRef.current);
		console.log('Page language:', document.documentElement.lang);
		
		// Check if Shapo is available and widget container exists
		if ((window as any).Shapo && widgetRef.current) {
			// Clear any existing widget content
			widgetRef.current.innerHTML = '';
			
			// Add the widget HTML manually to ensure it's there
			widgetRef.current.innerHTML = '<div data-shapo-widget="3ba2feb1f606743439aa"></div>';
			
			// Initialize the widget
			try {
				console.log('Calling Shapo.init()');
				(window as any).Shapo.init();
				console.log('Shapo.init() completed');
			} catch (error) {
				console.log('Shapo widget initialization error:', error);
			}
		} else {
			console.log('Shapo not available yet, retrying in 500ms');
			setTimeout(loadShapoWidget, 500);
		}
	};

	useEffect(() => {
		console.log('GoogleReviews component mounted, current lang:', i18n.language);

		const loadScript = () => {
			// Always remove existing script to ensure fresh load
			const existingScript = document.getElementById('shapo-embed-js');
			if (existingScript) {
				console.log('Removing existing Shapo script');
				existingScript.remove();
			}

			// Clear any existing window Shapo reference
			delete (window as any).Shapo;

			console.log('Loading fresh Shapo script for language:', i18n.language);
			const script = document.createElement('script');
			script.id = 'shapo-embed-js';
			script.type = 'text/javascript';
			script.src = 'https://cdn.shapo.io/js/embed.js?t=' + Date.now(); // Cache busting
			script.defer = true;
			
			script.onload = () => {
				console.log('Shapo script loaded successfully');
				scriptLoadedRef.current = true;
				setTimeout(() => {
					console.log('Initializing Shapo widget for language:', i18n.language);
					loadShapoWidget();
				}, 500); // Increased delay
			};
			
			script.onerror = () => {
				console.error('Failed to load Shapo script');
			};
			
			document.body.appendChild(script);
		};

		// Longer initial delay to ensure DOM is ready
		setTimeout(loadScript, 300);

		return () => {
			console.log('GoogleReviews component unmounting');
			if (widgetRef.current) {
				widgetRef.current.innerHTML = '';
			}
		};
	}, [i18n.language]);



	return (
		<div id="reviews" key={i18n.language}>
			<div id="shapo-widget-3ba2feb1f606743439aa" ref={widgetRef}></div>
		</div>
	);
};

export default GoogleReviews;
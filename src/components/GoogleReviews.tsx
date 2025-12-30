import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const GoogleReviews: React.FC = () => {
	const { i18n } = useTranslation();
	const widgetRef = useRef<HTMLDivElement>(null);
	const scriptLoadedRef = useRef<boolean>(false);
	const retryCountRef = useRef<number>(0);
	const maxRetries = 20; // Maximum 20 retries (10 seconds)

	const loadShapoWidget = () => {
		console.log('Trying to load Shapo widget, attempt:', retryCountRef.current + 1);
		
		// Check if Shapo is available and widget container exists
		if ((window as any).Shapo && widgetRef.current) {
			console.log('Shapo available, initializing widget');
			// Clear any existing widget content
			widgetRef.current.innerHTML = '';
			
			// Add the widget HTML manually to ensure it's there
			widgetRef.current.innerHTML = '<div data-shapo-widget="3ba2feb1f606743439aa"></div>';
			
			// Initialize the widget
			try {
				(window as any).Shapo.init();
				retryCountRef.current = 0; // Reset retry count on success
				console.log('Shapo widget initialized successfully');
			} catch (error) {
				console.error('Shapo widget initialization error:', error);
			}
		} else {
			retryCountRef.current += 1;
			
			if (retryCountRef.current <= maxRetries) {
				console.log('Shapo not ready, retrying in 500ms (attempt', retryCountRef.current, 'of', maxRetries, ')');
				setTimeout(loadShapoWidget, 500);
			} else {
				console.warn('Shapo widget failed to load after', maxRetries, 'retries');
			}
		}
	};

	useEffect(() => {
		const loadScript = () => {
			console.log('Loading Shapo script for language:', i18n.language);
			
			// Always remove existing script to ensure fresh load
			const existingScript = document.getElementById('shapo-embed-js');
			if (existingScript) {
				existingScript.remove();
			}

			// Clear any existing window Shapo reference
			delete (window as any).Shapo;
			
			// Reset retry count
			retryCountRef.current = 0;

			const script = document.createElement('script');
			script.id = 'shapo-embed-js';
			script.type = 'text/javascript';
			script.src = 'https://cdn.shapo.io/js/embed.js?t=' + Date.now(); // Cache busting
			script.defer = true;
			
			script.onload = () => {
				console.log('Shapo script loaded successfully');
				scriptLoadedRef.current = true;
				setTimeout(() => {
					loadShapoWidget();
				}, 1000); // Increased delay to 1 second
			};
			
			script.onerror = () => {
				console.error('Failed to load Shapo script');
			};
			
			document.body.appendChild(script);
		};

		// Longer initial delay to ensure DOM is ready
		setTimeout(loadScript, 300);

		return () => {
			if (widgetRef.current) {
				widgetRef.current.innerHTML = '';
			}
			retryCountRef.current = 0; // Reset retry count on cleanup
		};
	}, [i18n.language]);



	return (
		<div id="reviews" key={i18n.language}>
			<div id="shapo-widget-3ba2feb1f606743439aa" ref={widgetRef}></div>
		</div>
	);
};

export default GoogleReviews;
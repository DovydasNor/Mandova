import { useEffect,} from "react";

const GoogleReviews = () => {
	useEffect(() => {
		if (!document.getElementById('shapo-embed-js')) {
			const script = document.createElement('script');
			script.id = 'shapo-embed-js';
			script.type = 'text/javascript';
			script.src = 'https://cdn.shapo.io/js/embed.js';
			script.defer = true;
			document.body.appendChild(script);
		}
	}, []);

	return (
		<>
			<div id="reviews">
				<div id="shapo-widget-3ba2feb1f606743439aa"></div>
			</div>
		</>
	);
};

export default GoogleReviews;
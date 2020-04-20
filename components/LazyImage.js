import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({ image, scrollPosition }) => {
	return (
		<>
			<LazyLoadImage
				alt={image.alt}
				height={image.height}
				src={image.src} // use normal <img> attributes as props
				width={image.width}
				className={image.className}
				effect="opacity"
				scrollPosition={scrollPosition}
				delayMethod="throttle"
				useIntersectionObserver={true}
			/>
			<span>{image.caption}</span>
		</>
	);
};

export default LazyImage;

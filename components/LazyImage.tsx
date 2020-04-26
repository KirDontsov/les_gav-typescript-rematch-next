import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type LazyImageProps = {
	image: {
		height?: number;
		width?: number;
		className?: string;
		src: string;
		caption?: string;
		alt: string;
	};
	scrollPosition?: any;
};

const LazyImage: FC<LazyImageProps> = ({ image, scrollPosition }) => {
	return (
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
	);
};

export default LazyImage;

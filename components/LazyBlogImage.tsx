import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type LazyImageProps = {
	scrollPosition: any;
	alt: string;
	height?: number;
	width?: number;
	src: string;
	className?: string;
	caption?: string;
};

export const LazyBlogImage: FC<LazyImageProps> = props => {
	return (
		<LazyLoadImage
			alt={props.alt}
			height={props.height}
			src={props.src} // use normal <img> attributes as props
			width={props.width}
			className={props.className}
			effect="opacity"
			scrollPosition={props.scrollPosition}
			delayMethod="throttle"
			useIntersectionObserver={true}
		/>
	);
};

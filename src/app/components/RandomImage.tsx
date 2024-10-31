// empty component

import Image from "next/image";

export const RandomImage = ({ className }: { className?: string }) => {
	return (
		<Image
			alt="Card background"
			// random src image from unsplash
			src="https://source.unsplash.com/random"
			width={700}
			height={700}
			className={className}
		/>
	);
};

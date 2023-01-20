import {useRef} from 'react'
import {useInView} from 'framer-motion'

type SimpleHobbyBannerProps = {
	original_image: string,
	webp_image: string,
	alt_text: string,
	text: string,
	alternative: boolean
}
export const HobbyHero = ({original_image, webp_image, alt_text, text, alternative}: SimpleHobbyBannerProps) => {

	const ref = useRef(null)
	const isInView = useInView(ref)

	return (
		<div className="w-full max-w-8xl flex flex-wrap justify-center items-center gap-y-12 gap-x-8">
			<picture className={`w-[32rem] overflow-hidden rounded-md ${alternative ? 'lg:order-last' : ''}`}>
				<source type="image/webp" srcSet={webp_image}/>
				<source type="image/webp" srcSet={original_image}/>
				<img src={original_image} alt={alt_text}/>
			</picture>
			<div
				className={`nf-paragraph ${isInView ? 'nf-show' : 'nf-hide'} ${alternative ? 'nf-left' : 'nf-right'} max-w-lg`}
				ref={ref}
			>
				<p className={`text-2xl md:text-4xl text-info-content ${alternative ? 'text-right' : 'text-left'}`}>
					{text}
				</p>
			</div>
		</div>
	)

}
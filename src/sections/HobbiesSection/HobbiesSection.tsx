import {useRef} from 'react'
import {useInView} from 'framer-motion'
import {HobbyHero} from './HobbyHero'

import AImgOriginal1 from '../../assets/images/hobbies/audiophile_1.jpg'
import AImgOriginal3 from '../../assets/images/hobbies/audiophile_3.jpeg'
import AImgWebp1 from '../../assets/images/hobbies/audiophile_1.webp'
import AImgWebp3 from '../../assets/images/hobbies/audiophile_3.webp'
import './HobbiesSection.pcss'

export const HobbiesSection = () => {

	const ref = useRef(null)
	const isInView = useInView(ref)

	return (
		<div
			id="hobbies"
			className="bg-info w-full flex flex-col justify-center items-center gap-y-24 py-24 px-6 md:px-0"
		>
			<div>
				<h1 ref={ref}
				    className={`nf-paragraph nf-bottom ${isInView ? 'nf-show' : 'nf-hide'} text-6xl md:text-9xl font-mono text-info-content`}
				>
					HOBBIES
				</h1>
			</div>
			<HobbyHero
				original_image={AImgOriginal1}
				webp_image={AImgWebp1}
				alt_text="Audiophile Image 1"
				text="I love listening music, it's my passion. But I enjoy to have the best sound quality."
				alternative={false}
			/>
			<HobbyHero
				original_image={AImgOriginal3}
				webp_image={AImgWebp3}
				alt_text="Audiophile Image 1"
				text="I love reviewing music players, in-ear monitors and dacs!"
				alternative={true}
			/>
		</div>
	)
}

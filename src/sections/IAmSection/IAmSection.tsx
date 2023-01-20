import {useRef} from 'react'
import {motion, useScroll, useTransform, MotionValue} from 'framer-motion'

import PImgOriginal from '../../assets/images/profile/profile_photo.jpg'
import PImgWebp from '../../assets/images/profile/profile_photo.webp'


export const IAmSection = () => {

	const container = useRef(null)
	const {scrollYProgress} = useScroll({target: container})

	const borderRadius: MotionValue<string> = useTransform(
		scrollYProgress,
		[0, 1],
		['0.375rem', '99rem'],
	)
	const width: MotionValue<string> = useTransform(
		scrollYProgress,
		[0, 1],
		['16rem', '8rem'],
	)


	return (
		<div id="iam" ref={container}
		     className=" bg-primary h-[200vh] w-full py-32 flex flex-col items-center gap-y-16">
			<h1 className="text-6xl md:text-9xl font-mono text-primary-content">I AM</h1>
			<div
				className="max-w-2xl lg:max-w-3xl px-6 sticky top-[10vh] flex flex-col justify-center items-center gap-y-16">

				<motion.picture className="overflow-hidden" style={{borderRadius, width}}>
					<source type="image/webp" srcSet={PImgWebp}/>
					<source type="image/webp" srcSet={PImgOriginal}/>
					<img src={PImgOriginal} alt="Profile Image"/>
				</motion.picture>
				<motion.div
					className="flex flex-wrap gap-y-4 md:gap-y-8 text-xl md:text-3xl text-justify leading-relaxed text-primary-content font-serif"
					style={{
						opacity: scrollYProgress,
					}}
				>
					<blockquote className="flex flex-wrap gap-y-4 justify-center">
						<svg
							aria-hidden="true"
							className="w-16 h-16 text-secondary"
							viewBox="0 0 24 27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
								fill="currentColor"
							/>
						</svg>
						<div className="flex flex-wrap gap-y-8">
							<p>
								My name is Victor Armenta (well known as "Nefonfo").
								I'm a web developer who is finishing the computer engineering degree.
							</p>
							<p>
								I love creating designing functional designs and developed it, I like challenges that
								make me to be better in my area.
							</p>
							<p>
								As well as I love the frontend work, I also like the backend development.
								I have tried a lot of languages and frameworks as will be seen in other sections.
							</p>
						</div>
					</blockquote>
				</motion.div>
			</div>
		</div>
	)
}

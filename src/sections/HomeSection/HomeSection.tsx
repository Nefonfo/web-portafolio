import {useRef} from 'react'
import {useScroll} from 'framer-motion'
import {HiddenWord} from './HiddenWord'
import {Subtitle} from './Subtitle'
import {TranslatedWord} from './TranslatedWord'

export const HomeSection = () => {

	const container = useRef(null)
	const {scrollYProgress} = useScroll({target: container})

	return (
		<div id="home" className="h-[150vh] w-full" ref={container}>
			<div className="w-full sticky top-[25vh] flex flex-col justify-center gap-y-5 py-12 md:py-24">
				<div
					className="w-full flex justify-center text-primary-content text-6xl md:text-8xl lg:text-12xl font-mono"
                >
					<TranslatedWord word="N" scroll={scrollYProgress} alternate={false}/>
					<HiddenWord word="E" scroll={scrollYProgress}/>
					<HiddenWord word="F" scroll={scrollYProgress}/>
					<HiddenWord word="O" scroll={scrollYProgress}/>
					<HiddenWord word="N" scroll={scrollYProgress}/>
					<TranslatedWord word="F" scroll={scrollYProgress} alternate={true}/>
					<HiddenWord word="O" scroll={scrollYProgress}/>
				</div>
				<Subtitle text="WEB DEVELOPER" scroll={scrollYProgress}/>
			</div>
		</div>
	)
}
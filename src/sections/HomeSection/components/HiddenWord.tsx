import {motion, MotionValue} from 'framer-motion'

type HiddenWordProps = {
	word: string,
	scroll: MotionValue<number>
}

export const HiddenWord = ({word, scroll}: HiddenWordProps) => {

	return (
		<motion.div
			style={{scale: scroll, opacity: scroll}}
		>
			{word}
		</motion.div>
	)

}
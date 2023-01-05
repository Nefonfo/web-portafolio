import {motion, MotionValue, useTransform} from "framer-motion"
import {useEffect} from "react";

type TranslatedWordProps = {
    word: string,
    scroll: MotionValue<number>,
    alternate: boolean
}

export const TranslatedWord = ({word, scroll, alternate}: TranslatedWordProps) => {

    const initialTranslate: string = (alternate) ? '-200%' : '200%'
    const translateX: MotionValue<string> = useTransform(
        scroll,
        [0, 1],
        [initialTranslate, '0%']
    )

    return (
        <motion.h1
            style={{translateX}}
        >
            {word}
        </motion.h1>
    )
}


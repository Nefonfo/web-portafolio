import {motion, MotionValue, useTransform} from "framer-motion"
import {useEffect} from "react";
import {useDaisyColor} from "../../hooks/useDaisyColor";

type TranslatedWordProps = {
    word: string,
    scroll: MotionValue<number>,
    alternate: boolean
}

export const TranslatedWord = ({word, scroll, alternate}: TranslatedWordProps) => {

    // TRANSLATIONS
    const initialTranslate: string = (alternate) ? '-200%' : '200%'
    const translateX: MotionValue<string> = useTransform(
        scroll,
        [0, 1],
        [initialTranslate, '0%']
    )

    // COLORS
    const initialColor: string = useDaisyColor('--s')
    const finalColor: string = useDaisyColor('--pc')
    const color: MotionValue<string> = useTransform(
        scroll,
        [0,1],
        [`hsl(${initialColor})`, `hsl(${finalColor}`]
    )

    return (
        <motion.h1
            style={{translateX, color}}
        >
            {word}
        </motion.h1>
    )
}


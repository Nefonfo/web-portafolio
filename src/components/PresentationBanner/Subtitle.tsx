import {motion, MotionValue, useTransform} from "framer-motion";

type SubtitleProps = {
    text: string,
    scroll: MotionValue<number>
}

export const Subtitle = ({text, scroll}: SubtitleProps) => {

    const translateX: MotionValue<string> = useTransform(
        scroll,
        [0, 1],
        ['500%', '0%']
    )

    return (
        <div
            className='w-full px-4 md:px-24 flex justify-center overflow-hidden'
        >
            <motion.h2
                className='text-3xl md:text-5xl text-accent'
                style={{translateX}}
            >
                {text}
            </motion.h2>
        </div>
    )

}
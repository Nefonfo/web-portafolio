import {motion} from "framer-motion"
import {MenuLink} from "./MenuLink"

const menuLinks: Array<any> = [
    {
        name: 'HOME',
        link: '#home'
    },
    {
        name: 'IAM',
        link: '#iam'
    },
]

type DrawerProps = {
    handleOpen: Function
}

export const Drawer = ({handleOpen}: DrawerProps) => {
    return (
        <motion.ul
            initial={{opacity: 0, translateX: '10%'}}
            animate={{opacity: 1, translateX: '0%'}}
            transition={{delay: 0.5, ease: 'easeInOut'}}
            className='w-full h-full flex flex-wrap flex-col items-center justify-center gap-y-10 text-5xl md:text-7xl text-secondary-content'
        >
            {
                menuLinks.map((element) => (
                    <li key={element.name}>
                        <MenuLink handleOpen={handleOpen} {...element} />
                    </li>
                ))
            }
        </motion.ul>
    );
};

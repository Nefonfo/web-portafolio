import {motion} from "framer-motion";
import {useState} from "react";

export const Menu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        document.body.style.overflowY = !isOpen ? 'hidden' : ''
        setIsOpen(!isOpen)
    }

    const menuVariants = {
        closed: {
            height: '0%',
            width: '0%',
            borderRadius: '9999px',

        },
        open: {
            height: '100%',
            width: '100%',
            borderRadius: '0px',
        }
    }

    const hamburgerVariants = {
        closed: {
            d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
        },
        open: {
            d: 'M6 18L18 6M6 6l12 12'
        }
    }

    return (
        <>
            <motion.div
                initial='closed'
                variants={menuVariants}
                animate={isOpen ? 'open': 'closed'}
                transition={{ease: 'easeInOut'}}
                className='bg-secondary z-40 fixed'
                style={{
                    translate: '50% -50%',
                    top: '50%',
                    right: '50%',
                }}
            >
                {
                    isOpen && (
                        <motion.ul
                            initial={{opacity: 0, translateX: '10%'}}
                            animate={{opacity: 1, translateX: '0%'}}
                            transition={{delay: 0.5, ease: 'easeInOut'}}
                            className='w-full h-full flex flex-wrap flex-col items-center justify-center gap-y-10 text-5xl md:text-7xl text-secondary-content'
                        >
                            <li>
                                <a className='link' href="#!">HOME</a>
                            </li>
                            <li>
                                <a className='link' href="#!">IAM</a>
                            </li>
                            <li>
                                <a className='link' href="">KNOWLEDGE</a>
                            </li>
                            <li>
                                <a className='link' href="">CONTACT</a>
                            </li>
                        </motion.ul>
                    )
                }
            </motion.div>
            <div className={`sticky top-0 flex justify-end px-3 py-5 ${isOpen ? 'z-50' : 'z-10'}`}>
                <button onClick={handleOpen} className="w-14 h-14 btn btn-secondary rounded-full text-secondary-content">
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial='closed'
                            animate={isOpen ? 'open': 'closed'}
                            variants={hamburgerVariants}
                            transition={{ease: 'easeInOut'}}
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}

import {ReactNode} from 'react'
import {motion} from 'framer-motion'
import {TechCard} from './'

type KnowledgeModalProps = {
	name: string,
	description: string,
	icon: ReactNode,
	closeModal: () => void,
	children: ReactNode
}
export const KnowledgeModal = ({name, description, icon, closeModal, children}: KnowledgeModalProps) => {
	return (
		<motion.div
			initial={{
				backgroundColor: 'rgba(0,0,0,0)'
			}}
			animate={{
				backgroundColor: 'rgba(0,0,0,0.45)'
			}}
			exit={{
				backgroundColor: 'rgba(0,0,0,0)'
			}}
			className="cursor-pointer fixed top-0 flex items-center justify-center h-full w-full z-20 px-3 lg:px-0"
			onClick={closeModal}
		>
			<motion.div onClick={(e) => e.stopPropagation()} layoutId={`card-${name}`} className="cursor-pointer w-full md:w-10/12 lg:w-2/3 card bg-primary shadow-xl">
				<div className="card-body flex flex-col lg:flex-row gap-y-8 gap-x-10 text-primary-content">
					<div className="w-full lg:w-2/5 flex flex-col flex-wrap gap-y-4 gap-x-8 justify-center lg:justify-between items-center">
						<motion.div className="w-28 md:w-36 lg:w-44" layoutId={`icon-${name}`}>
							{icon}
						</motion.div>
						<div className="w-full md:w-auto md:flex-1 flex flex-col gap-y-4">
							<motion.h1
								layoutId={`title-${name}`}
								className="font-serif text-4xl text-center lg:text-left font-bold text-primary-content"
							>
								{name}
							</motion.h1>
							<p className="text-lg text-justify text-neutral-content">
								{description}
							</p>
						</div>
					</div>
					<div className="w-full lg:w-3/5 flex flex-row flex-wrap items-center justify-evenly gap-x-8 gap-y-4">
						{children}
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}

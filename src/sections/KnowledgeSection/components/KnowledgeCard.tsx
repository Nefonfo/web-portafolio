import {ReactNode} from 'react'
import {motion} from 'framer-motion'

type KnowledgeCardProps = {
	icon: ReactNode,
	name: string,
	description: string,
	openModal: (icon: ReactNode, name: string, description: string, children: ReactNode) => void,
	children: ReactNode
}
export const KnowledgeCard = ({icon, name, description, openModal, children}: KnowledgeCardProps) => {

	return (
		<motion.div onClick={() => openModal(icon, name, description, children)} layoutId={`card-${name}`} className="cursor-pointer w-full md:w-1/4 lg:w-1/5 card bg-primary shadow-xl">
			<div className="card-body flex gap-y-4 justify-center items-center text-primary-content">
				<motion.div layoutId={`icon-${name}`} className='h-16 w-16 text-neutral-content'>
					{icon}
				</motion.div>
				<motion.h1 layoutId={`title-${name}`} className='font-serif text-xl font-bold text-center'>{name}</motion.h1>
			</div>
		</motion.div>
	)
}

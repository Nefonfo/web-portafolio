import {motion} from 'framer-motion'

type KnowledgeCardsProps = {
	id: string,
	name: string,
	icon: any,
	handleClick: Function
}
export const KnowledgeCards = ({id, name, icon, handleClick}: KnowledgeCardsProps) => (
	<motion.div layoutId={`card-${id}`} onClick={() => handleClick()} className="cursor-pointer w-full md:w-1/4 lg:w-1/5 card bg-primary shadow-xl">
		<div className="card-body flex gap-y-4 justify-center items-center text-primary-content">
			<motion.div layoutId={`icon-${id}`} className='h-16 w-16 text-neutral-content'>
				{icon}
			</motion.div>
			<motion.h1 layoutId={`title-${id}`} className='font-serif text-xl font-bold text-center'>{name}</motion.h1>
		</div>
	</motion.div>
)
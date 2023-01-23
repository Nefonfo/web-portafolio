import {motion} from 'framer-motion'

type TechnologyThumbnailProps = {
	image: string,
	name: string
}

const TechnologyThumbnail = ({image, name}: TechnologyThumbnailProps) => (
	<div className="flex flex-col items-center gap-y-4">
		<img className='h-16 w-auto' src={image} alt=""/>
		<div className="flex-1 flex items-end justify-center">
			<h4 className='text-sm text-primary-content'>{name}</h4>
		</div>
	</div>
)

type TechnologiesProps = {
	name: string,
	image: string
}
type ModalContentProps = {
	description: string,
	technologies: Array<TechnologiesProps>
}
type KnowledgeModalProps = {
	id: string,
	name: string,
	icon: any,
	content: ModalContentProps,
	handleClose: Function
}
export const KnowledgeModal = ({id, icon, name, content, handleClose}: KnowledgeModalProps) => {


	return (
		<motion.div
			key='knowledge-modal'
			initial={{
				backgroundColor: 'rgba(0,0,0,0)'
			}}
			animate={{
				backgroundColor: 'rgba(0,0,0,0.45)'
			}}
			exit={{
				backgroundColor: 'rgba(0,0,0,0)'
			}}
			onClick={() => handleClose()}
			className="cursor-pointer fixed top-0 flex items-center justify-center h-screen w-screen z-10 px-6 md:px-auto"
		>
			<motion.div layoutId={`card-${id}`} className="cursor-pointer w-full md:w-10/12 lg:w-2/3 card bg-primary shadow-xl">
				<div className="card-body flex gap-y-8 text-primary-content">
					<div className="flex flex-row flex-wrap gap-y-4 gap-x-8 justify-center lg:justify-between items-center">
						<motion.div className="w-28 md:w-36 lg:w-44" layoutId={`icon-${id}`}>
							{icon}
						</motion.div>
						<div className='w-full md:w-auto md:flex-1 flex flex-col gap-y-4'>
							<motion.h1 layoutId={`title-${id}`} className='font-serif text-4xl text-center md:text-left font-bold text-primary-content'>{name}</motion.h1>
							<p className='text-lg text-justify text-neutral-content'>
								{content.description}
							</p>
						</div>
					</div>
					<div className='flex flex-col flex-wrap gap-y-8'>
						<h3 className='font-serif font-bold text-2xl text-center md:text-left'>Technologies</h3>
						<div className='flex flex-wrap justify-center gap-x-6 gap-y-4'>
							{
								content.technologies.map(tech => (
									<TechnologyThumbnail key={tech.image} {...tech} />
								))
							}
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}

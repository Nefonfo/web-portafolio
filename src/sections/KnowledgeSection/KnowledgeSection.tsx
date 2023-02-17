import {ReactNode, useEffect, useRef, useState} from 'react'
import {AnimatePresence, motion, useInView} from 'framer-motion'
import {KnowledgeCard, KnowledgeModal, TechCard, TechCardWrapper} from './components'
import {FrontEndSubSection} from './subsections/FrontEndSubSection'

export const KnowledgeSection = () => {

	const [modal, saveModal] = useState<any>({open: false})
	const ref = useRef(null)
	const isInView = useInView(ref)

	const titleVariants = {
		hide: {
			scale: 0
		},
		show: {
			scale: 1
		}
	}

	const openModal = (icon: ReactNode, name: string, description: string, children: ReactNode) => {
		saveModal({
			open: true,
			icon,
			name,
			description,
			children
		})
	}

	const closeModal = () => {
		saveModal({open: false})
	}

	return (
		<div
			id="knowledge"
			className="bg-neutral w-full py-32 flex flex-col items-center gap-y-16"
		>
			{
				modal.open &&
					<KnowledgeModal
						icon={modal.icon}
						name={modal.name}
						description={modal.description}
						closeModal={closeModal}
					>
						{modal.children}
					</KnowledgeModal>
			}
			<motion.h1
				initial='hide'
				animate={isInView ? 'show': 'hide'}
				variants={titleVariants}
				transition={{
					ease: 'easeInOut',
					duration: 0.35
				}}
				className="text-5xl md:text-8xl font-mono text-secondary"
				ref={ref}
			>
				KNOWLEDGE
			</motion.h1>
			<div className="w-full flex flex-wrap justify-center items-center gap-y-8 gap-x-6 px-6 md:px-auto">
				<FrontEndSubSection openModal={openModal} />
			</div>
		</div>
	)
}

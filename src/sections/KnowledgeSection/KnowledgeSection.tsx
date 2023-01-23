import {useEffect, useRef, useState} from 'react'
import {KnowledgeModal} from './KnowledgeModal'
import {knowledgeContent} from './fixtures'
import {KnowledgeCards} from './KnowledgeCards'
import {AnimatePresence, motion, useInView} from 'framer-motion'
export const KnowledgeSection = () => {

	const [index, saveIndex] = useState<number>(-1)
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

	useEffect(() => {
		if(index > -1) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}, [index])
	const openModal = (index: number) => {
		saveIndex(index)
	}

	const closeModal = () => {
		saveIndex(-1)
	}

	return (
		<div
			id="knowledge"
			className="bg-neutral w-full py-32 flex flex-col items-center gap-y-16"
		>
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
			<motion.div layout className="w-full flex flex-wrap justify-center items-center gap-y-8 gap-x-6 px-6 md:px-auto">
				<AnimatePresence>
					{
						index > -1 && (

								<KnowledgeModal
									id={knowledgeContent[index].id}
									icon={knowledgeContent[index].icon}
									name={knowledgeContent[index].name}
									content={knowledgeContent[index].content}
									handleClose={closeModal}
								/>

						)
					}
				</AnimatePresence>
				{
					knowledgeContent
						.map((content, index)=> (
							<KnowledgeCards
								key={content.id}
								handleClick={() => openModal(index)}
								{...content}
							/>
						))
				}
			</motion.div>
		</div>
	)
}

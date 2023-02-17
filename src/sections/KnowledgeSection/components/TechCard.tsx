import {ReactNode, SyntheticEvent, useState} from 'react'
import {motion} from 'framer-motion'

export type TechCardProps = {
	name: string,
	description: string,
	open?: boolean,
	handleClick?: () => void,
	children?: ReactNode
}
export const TechCard = ({name, description, open = false, handleClick, children}: TechCardProps) => {

	const variations = {
		'closed': {
			width: 'min-content'
		},
		'open': {
			width: '100%'
		}
	}

	const clickEvent = (e: SyntheticEvent) => {
		e.stopPropagation()
		handleClick && handleClick()
	}

	return (
		<div className={open ? '' : 'tooltip'} data-tip={name}>
			<motion.div
				initial={variations.closed}
				variants={variations}
				animate={open ? 'open' : 'closed'}
				className="card bg-base-100 shadow-xl"
				onClick={clickEvent}
			>
				<div className={`p-4 flex flex-row items-center justify-center ${open ? 'gap-x-8' : ''}`}>
					{children}
					<div>
						{
							open && (
								<>
									<h1 className='font-mono font-bold text-xl'>{name}</h1>
									<p className='text-neutral-content'>{description}</p>
								</>
							)
						}
					</div>
				</div>
			</motion.div>
		</div>
	)
}

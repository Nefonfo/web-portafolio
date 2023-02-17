import {Children, cloneElement, ReactElement, ReactNode, useState} from 'react'
import {TechCardProps} from './'

type TechCardWrapper = {
	children: ReactNode
}
export const TechCardWrapper = ({children}: TechCardWrapper) => {

	const [selected, saveSelected] = useState<string|null>(null)

	const manageOpenCard = (name: string) => {
		if(name === selected){
			saveSelected(null)
		} else {
			saveSelected(name)
		}
	}

	return (
		<>
			{
				Children.map(children as ReactElement<TechCardProps>, child => {
					return cloneElement(child, {
						open: selected === child.props.name,
						handleClick: () => manageOpenCard(child.props.name)
					})
				})
			}
		</>
	)
}

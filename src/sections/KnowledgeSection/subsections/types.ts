import {ReactNode} from 'react'

export type GenericSubSection = {
	openModal: (icon: ReactNode, name: string, description: string, children: ReactNode) => void
}
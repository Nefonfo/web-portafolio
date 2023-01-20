export const useDaisyColor = (property: string): string => {

	const root: Element | null = document.querySelector(':root')

	return root ? getComputedStyle(root).getPropertyValue(property) : ''

}

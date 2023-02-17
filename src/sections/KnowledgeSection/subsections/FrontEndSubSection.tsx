import {GenericSubSection} from './types'
import {KnowledgeCard, TechCard, TechCardWrapper} from '../components'


export const FrontEndSubSection = ({openModal}: GenericSubSection) => {
	return (
		<KnowledgeCard
			icon={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="icon icon-tabler icon-tabler-brush"
					viewBox="0 0 24 24"
				>
					<path stroke="none" d="M0 0h24v24H0z"></path>
					<path d="M3 21v-4a4 4 0 114 4H3M21 3A16 16 0 008.2 13.2M21 3a16 16 0 01-10.2 12.8M10.6 9a9 9 0 014.4 4.4"></path>
				</svg>
			}
			name='FrontEnd'
			description='sample'
			openModal={openModal}
		>
			<TechCardWrapper>
				<TechCard name='React' description='Librería famosa creada por Facebook para el desarrollo de aplicaciones web.'>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="text-info w-16 h-16"
						viewBox="0 0 24 24"
					>
						<path stroke="none" d="M0 0h24v24H0z"></path>
						<path
							d="M6.306 8.711C3.704 9.434 2 10.637 2 12c0 2.21 4.477 4 10 4 .773 0 1.526-.035 2.248-.102M17.692 15.289C20.295 14.567 22 13.363 22 12c0-2.21-4.477-4-10-4-.773 0-1.526.035-2.25.102"></path>
						<path
							d="M6.305 15.287C5.629 17.902 5.82 19.98 7 20.66c1.913 1.105 5.703-1.877 8.464-6.66.387-.67.733-1.339 1.036-2M17.694 8.716C18.371 6.1 18.181 4.02 17 3.34 15.087 2.235 11.297 5.217 8.536 10c-.387.67-.733 1.34-1.037 2"></path>
						<path
							d="M12 5.424C10.075 3.532 8.18 2.658 7 3.34 5.087 4.444 5.774 9.217 8.536 14c.386.67.793 1.304 1.212 1.896M12 18.574c1.926 1.893 3.821 2.768 5 2.086 1.913-1.104 1.226-5.877-1.536-10.66-.375-.65-.78-1.283-1.212-1.897M11.5 12.866a1 1 0 101-1.732 1 1 0 00-1 1.732z"></path>
					</svg>
				</TechCard>
				<TechCard name='Tailwind' description='Librería famosa creada por Facebook para el desarrollo de aplicaciones web.'>
					<svg className='w-16 h-16' viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z" fill="#07B6D5"/>
						<path d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z" fill="#07B6D5"/>
					</svg>
				</TechCard>
				<TechCard name='Boostrap' description='Librería famosa creada por Facebook para el desarrollo de aplicaciones web.'>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="h-16 w-16 text-primary-content"
						viewBox="0 0 24 24"
					>
						<path stroke="none" d="M0 0h24v24H0z"></path>
						<path d="M2 12a2 2 0 002-2V6a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 002 2M2 12a2 2 0 012 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 012-2"></path>
						<path d="M9 16V8h3.5a2 2 0 110 4H9h4a2 2 0 110 4H9z"></path>
					</svg>
				</TechCard>
				<TechCard name='Figma' description='Librería famosa creada por Facebook para el desarrollo de aplicaciones web.'>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-16 h-16 text-secondary"
						viewBox="0 0 24 24"
					>
						<path stroke="none" d="M0 0h24v24H0z"></path>
						<path d="M12 12a3 3 0 106 0 3 3 0 10-6 0"></path>
						<path d="M6 6a3 3 0 013-3h6a3 3 0 013 3v0a3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
						<path d="M9 9a3 3 0 000 6h3m-3 0a3 3 0 103 3V3"></path>
					</svg>
				</TechCard>
				<TechCard name='Angular' description='Librería famosa creada por Facebook para el desarrollo de aplicaciones web.'>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-16 h-16 text-error"
						viewBox="0 0 24 24"
					>
						<path stroke="none" d="M0 0h24v24H0z"></path>
						<path d="M5.428 17.245l6.076 3.471a1 1 0 00.992 0l6.076-3.471a1 1 0 00.495-.734l1.323-9.704a1 1 0 00-.658-1.078l-7.4-2.612a1 1 0 00-.665 0L4.268 5.73a1 1 0 00-.658 1.078l1.323 9.704a1 1 0 00.495.734z"></path>
						<path d="M9 15l3-8 3 8M10 13h4"></path>
					</svg>
				</TechCard>
			</TechCardWrapper>
		</KnowledgeCard>
	)
}

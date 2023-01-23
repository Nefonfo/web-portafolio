import HtmlImage from '../../assets/images/technologies/frontend/html.png'
import CssImage from '../../assets/images/technologies/frontend/css.png'
import JsImage from '../../assets/images/technologies/frontend/js.png'
import TsImage from '../../assets/images/technologies/frontend/ts.png'
import ReactImage from '../../assets/images/technologies/frontend/react.png'
import AngularImage from '../../assets/images/technologies/frontend/angular.png'
import ZurbImage from '../../assets/images/technologies/frontend/zurb.png'
import TailwindImage from '../../assets/images/technologies/frontend/tailwind.png'
import BoostrapImage from '../../assets/images/technologies/frontend/bootstrap.png'
import ViteImage from '../../assets/images/technologies/frontend/vite.png'
import WebpackImage from '../../assets/images/technologies/frontend/webpack.png'
import ParcelImage from '../../assets/images/technologies/frontend/parcel.png'
import FigmaImage from '../../assets/images/technologies/frontend/figma.png'

import PythonImage from '../../assets/images/technologies/backend/python.png'
import NodeImage from '../../assets/images/technologies/backend/node.png'
import JavaImage from '../../assets/images/technologies/backend/java.png'
import PhpImage from '../../assets/images/technologies/backend/php.png'
import DjangoImage from '../../assets/images/technologies/backend/django.png'
import WagtailImage from '../../assets/images/technologies/backend/wagtail.png'
import NestjsImage from '../../assets/images/technologies/backend/nestjs.png'

export const knowledgeContent = [
	{
		id: 'frontend',
		name: 'FrontEnd Development',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
			</svg>
		),
		content: {
			description: 'I have always liked to give the best user experience, which has led me to learn many things about the frontend, these are the technologies that I currently use the most.',
			technologies: [
				{
					name: 'Html',
					image: HtmlImage
				},
				{
					name: 'Css',
					image: CssImage
				},
				{
					name: 'Javascript',
					image: JsImage
				},
				{
					name: 'Typescript',
					image: TsImage
				},
				{
					name: 'Foundation',
					image: ZurbImage
				},
				{
					name: 'Bootstrap',
					image: BoostrapImage
				},
				{
					name: 'Tailwind',
					image: TailwindImage
				},
				{
					name: 'React',
					image: ReactImage
				},
				{
					name: 'Angular',
					image: AngularImage
				},
				{
					name: 'Vite',
					image: ViteImage
				},
				{
					name: 'Parcel',
					image: ParcelImage
				},
				{
					name: 'Webpack',
					image: WebpackImage
				},
				{
					name: 'Figma',
					image: FigmaImage
				},
			]
		}
	},
	{
		id: 'backend',
		name: 'BackEnd Development',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
			</svg>
		),
		content: {
			description: 'I have always liked to give the best user experience, which has led me to learn many things about the frontend, these are the technologies that I currently use the most.',
			technologies: [
				{
					name: 'Python',
					image: PythonImage
				},
				{
					name: 'Django',
					image: DjangoImage
				},
				{
					name: 'Wagtail CMS',
					image: WagtailImage
				},
				{
					name: 'JS (Node)',
					image: NodeImage
				},
				{
					name: 'Typescript',
					image: TsImage
				},
				{
					name: 'Nest',
					image: NestjsImage
				},
				{
					name: 'Java',
					image: JavaImage
				},
				{
					name: 'PHP',
					image: PhpImage
				}
			]
		}
	},
]
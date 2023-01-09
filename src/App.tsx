import {PresentationBanner} from "./components/PresentationBanner"
import {Menu} from "./components/Menu"
import {IAmBanner} from "./components/IAmBanner"
import {HobbiesBanner} from "./components/HobbiesBanner";



const App = () => {

    return (
        <>
            <Menu />
            <PresentationBanner />
            <IAmBanner />
            <HobbiesBanner />
        </>
    )
}

export default App

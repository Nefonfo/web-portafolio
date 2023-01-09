import AudioImage1 from "../../assets/images/audiophile_1.jpg";
import AudioImage2 from "../../assets/images/audiophile_2.jpg";
import {SimpleHobbyBanner} from "./";

export const HobbiesBanner = () => {
    return (
        <div className='bg-info w-full flex flex-col justify-center items-center gap-y-24 py-24 px-6 md:px-0'>
            <h1 className='text-6xl md:text-9xl font-mono text-info-content'>HOBBIES</h1>
            <SimpleHobbyBanner
                image={AudioImage1}
                alt_text='Audiophile Image 1'
                text="I love listening music, it's my passion. But I enjoy to have the best sound quality."
                alternative={false}
            />
            <SimpleHobbyBanner
                image={AudioImage2}
                alt_text='Audiophile Image 1'
                text="I love reviewing music players, in-ear monitors and dacs!"
                alternative={true}
            />
        </div>
    )
}

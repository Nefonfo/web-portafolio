
type SimpleHobbyBannerProps = {
    image: string,
    alt_text: string,
    text: string,
    alternative: boolean
}
export const SimpleHobbyBanner = ({image, alt_text, text, alternative}: SimpleHobbyBannerProps) => {

    return(
        <div className='w-full max-w-8xl flex flex-wrap justify-center items-center gap-y-12 gap-x-8'>
            <img className={`w-[32rem] rounded-md ${alternative ? 'lg:order-last': ''}`} src={image} alt={alt_text}/>
            <div className={`max-w-lg border-secondary ${alternative ? 'pr-4 border-r-8 text-right': 'pl-4 border-l-8 text-left'}`}>
                <p className="text-2xl md:text-4xl text-info-content">
                    { text }
                </p>
            </div>
        </div>
    )

}
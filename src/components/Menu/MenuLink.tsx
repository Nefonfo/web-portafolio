type MenuLinkProps = {
    name: string,
    link: string,
    handleOpen: Function,
    className: string
}
export const MenuLink = ({name, link, handleOpen, className}: MenuLinkProps) => {

    const handleNavigation = (e: any) => {
        e.preventDefault()
        handleOpen()
        window.location.replace(link)
    }

    return (
        <a onClick={handleNavigation} className={className} href={link}>{name}</a>
    )
}
import {ReactNode} from "react";

type ContactIconProps = {
    children: ReactNode,
    btnColor: string,
    href: string
}
export const ContactIcon = ({children, btnColor, href}: ContactIconProps) => {
    return (
        <a
            target='_blank'
            href={href}
            className={`h-14 w-14 btn btn-circle ${btnColor} flex justify-center items-center`}>
            {children}
        </a>
    );
};

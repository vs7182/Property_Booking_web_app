'use client'
interface MenuLinkProps{
    label:string;
    onClick: () =>void;
    className?:string

}
const MenuLink:React.FC<MenuLinkProps> = ({label,className,onClick}) =>{
    return(
        <div onClick={onClick} className={`px-5 py-4 hover:bg-gray-100 transition${className}`}>
            {label}

        </div>
    )

}

export default MenuLink;
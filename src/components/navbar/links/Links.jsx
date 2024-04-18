import Link from "next/link";

const Links = () => {

    const links = [

{
    title: "Home",
    path:"/"
},
{
    title: "About",
    path:"/about"
},
{
    title: "Contact",
    path:"/contact"
},
{
    title: "Blog",
    path:"/blog"
}


    
    ]
    return ( 

<div>
    {links.map(item => (
    <Link href={item.path} key={item.title}>{item.title}</Link>
    ))}
    </div>

     );
}
 
export default Links;

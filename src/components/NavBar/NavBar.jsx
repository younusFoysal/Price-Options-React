import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";
import Link from "../Link/Link.jsx";


const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/contact', name: 'Contact' }
    ];



    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose></AiOutlineClose>
                        : <AiOutlineMenu></AiOutlineMenu>
                }

            </div>
            <ul className={`md:flex duration-1000 absolute md:static bg-yellow-200 px-6
            ${open ? 'top-16' : '-top-60'}
            `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;
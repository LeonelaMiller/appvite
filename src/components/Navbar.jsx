import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"
import { CardWidget } from "./CartWidget"
export const Navbar = () => {
    const content = <>
    <div className="ig:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
        <NavLink spy={true} smooth={true} to="/">
            <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-900 hover:border-fuchsia-400 cursor-pointer">Inicio</li>
            </NavLink>
            <NavLink spy={true} smooth={true} to="category/Telefono">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Telefono</li>
            </NavLink>
            <NavLink spy={true} smooth={true} to="category/Computadora">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Computadora</li>
            </NavLink>
            <NavLink spy={true} smooth={true} to="category/Auriculares">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Auriculares</li>
            </NavLink>
        </ul>
    </div>
    </>
    return(<nav>
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
            <div className="flex item-center flex-1">
                <span className="text-3x1 font-bold">Lux</span>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                <NavLink spy={true} smooth={true} to="/">
            <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-900 hover:border-fuchsia-400 cursor-pointer">Inicio</li>
            </NavLink>
            <NavLink spy={true} smooth={true} to="category/Telefono">
            <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-900 hover:border-fuchsia-400 cursor-pointer">Telefono</li>
            </NavLink>
            <NavLink spy={true} smooth={true} to="category/Computadora">
            <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-900 hover:border-fuchsia-400 cursor-pointer">Computadora</li>
            </NavLink>
            <NavLink spy={true} smooth={true} to="category/Auriculares">
            <li className="hover:text-fuchsia-400 transition border-b-2 border-slate-900 hover:border-fuchsia-400 cursor-pointer">Auriculares</li>
            </NavLink>
            <CardWidget />
        </ul>
                </div>
            </div>
        </div>
        </nav>
        );
}
export default Navbar
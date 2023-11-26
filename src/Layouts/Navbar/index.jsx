
import NavBarList from "./NavbarList";
import {navItemsLeft, navItemsRight } from './Navitems'
const NavBar = () => {




    return <nav  className="h-16 bg-tmdbDarkBlue flex text-white font-semibold justify-between items-center max-w-[1300px] mx-auto px-10">
        <NavBarList items={navItemsLeft}/>
        <NavBarList items={navItemsRight}/>

    </nav>
}

export default NavBar;
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounf-lg bg-white item-center justify-center flex font-blod shadow-md">
            <p className="blue-gradient_text">AH</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to= "/about" className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to= "/projects" className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
                projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
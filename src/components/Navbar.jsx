import{NavLink} from'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink exact activeClassName='active' to="/">
            Home
            </NavLink>
            <NavLink  to="/project">Projects</NavLink>   
            <NavLink  to="/contact">Contact</NavLink>
        </div>
    )
}

export default Navbar

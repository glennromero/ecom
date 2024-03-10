import navLogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <img src={navLogo} alt="" className="navLogo" />
                <img src={navProfile} className='navProfile' alt="" />
            </div>
        </>
    )
}

export default Navbar;
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './navbar.scss'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../authContext/AuthContext'
import { logout } from '../../authContext/AuthActions'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const {dispatch} = useContext(AuthContext)

    window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
    };

  return (
    <div className={isScrolled? 'navbar scrolled':"navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" />
            <Link className='link' to="/">
                <span>Homepage</span>
            </Link>
            <Link className='link' to="/movies">
                <span>Movies</span>
            </Link>
            <Link className='link' to="/series">
                <span>Series</span>
            </Link>
            </div>
            <div className="right">
                {/* <Search className='icon'/> */}
                {/* <span>KID</span> */}
                {/* <Notifications className='icon'/> */}
                <img src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        {/* <span>Settings</span> */}
                        <span onClick={()=>dispatch(logout())}>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
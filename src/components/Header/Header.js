import '../../common/SCSS/Header.scss';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link className="btn" to="/"><div class="logo">LOGO</div></Link>
            <Link className="btn" to="main"><span>Main</span></Link>
            <Link className="btn" to="offers"><span>Offers</span></Link>
            <Link className="btn" to="about"><span>About</span></Link>
            <Outlet />
        </div>
    )
}

export default Header
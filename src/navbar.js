import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <ul className={'nav-links'}>
                    <Link to={'/home'}><li>Home</li></Link>
                    <Link to={'/products'}><li>Products</li></Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar;

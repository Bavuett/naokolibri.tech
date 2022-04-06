import React, {Component} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <>
            <nav className="navigation">
                <Link to="/" className="nav-title">
                    Kolibri
                </Link>
            </nav>
        </>
    )
  }
}

export default Navbar;
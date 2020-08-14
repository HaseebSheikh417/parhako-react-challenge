import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <header>
              <Link to="/cart"> <FaShoppingCart size='5rem'/> </Link>                 
            </header>
        </div>
    )
}

export default Header
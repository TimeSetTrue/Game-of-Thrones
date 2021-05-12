import React from 'react';
import styled from 'styled-components';
import './header.css';

const Header = () => {
    return (
        <div className="header__block">
            <div>
                <h3 className="header__title"></h3>
                <a href="#">
                Game of Thrones DB
                </a>
            </div>
            <ul className="header__links">
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;
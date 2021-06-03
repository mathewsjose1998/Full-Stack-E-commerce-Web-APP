import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapContainer">
                        <div className="header__input">
                            <SearchIcon/>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="header__languageDropdown">
                            <select>
                                <option value="English">English</option>
                                <option value="English">English</option>
                                <option value="English">English</option>
                            </select>
                        </div>

                    <div className="header__logo">
                        <img src="https://raw.githubusercontent.com/santdas36/amazon-ish/e984964373a1031ccf97b840d4b8007e3d54dfed/src/assets/logo.svg" alt="" />
                    </div>
            </div>
            
        </div>
    )
}

export default Header

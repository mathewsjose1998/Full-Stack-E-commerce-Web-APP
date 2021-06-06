import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Sidebar = () => {
    const [{basket},dispatch]=useStateValue()

    return (

        <div className="sidebar">
            
            <div className="sidebar__Logo">
                <img src="https://raw.githubusercontent.com/santdas36/amazon-ish/e984964373a1031ccf97b840d4b8007e3d54dfed/src/assets/icon.svg" alt="" />
            
            </div>
            <div className="sidebar__iconsContainer">
         <Link to="/" style={{ textDecoration: 'none' }}><HomeIcon className="sidebar__homeIcon"/></Link> 
        <Link to="/checkout" style={{ textDecoration: 'none' }}> <p className="cartItem__count">{basket.length
        }</p> <ShoppingCartIcon className="sidebar__cartIcon"/></Link>
            <BookmarksIcon className="sidebar__bookmarkIcon"/>
            <QueryBuilderIcon className="sidebar__ordersIcon"/>
            </div>
            
            <div className="sidebar__userInfo">
                <Avatar src="https://lh3.googleusercontent.com/proxy/doh7gzrR3_pLlm1cW4rI_63ywOm5VOEeCtajE7KNV7u2LoZ04Zb5zj6u-z1WNJ58wHnpekLI9czK5AG96mlCK4mmU63vTJvf4bwwp810RJbpO3D6Mo3yqg" />
            </div>
            
        </div>
    )
}

export default Sidebar

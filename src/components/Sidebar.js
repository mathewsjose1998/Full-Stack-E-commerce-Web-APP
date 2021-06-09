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
    const [{basket,user},dispatch]=useStateValue()

    return (

        <div className="sidebar">
            
            <div className="sidebar__Logo">
                <img src="https://raw.githubusercontent.com/santdas36/amazon-ish/e984964373a1031ccf97b840d4b8007e3d54dfed/src/assets/icon.svg" alt="" />
            
            </div>
            <div className="sidebar__iconsContainer">
         <Link to="/" style={{ textDecoration: 'none',color:"black"}}><HomeIcon className="sidebar__homeIcon"/></Link> 
        <Link to="/checkout" style={{ textDecoration: 'none',color:"black" }}> <p className="cartItem__count">{basket.length
        }</p> <ShoppingCartIcon className="sidebar__cartIcon"/></Link>
            <BookmarksIcon className="sidebar__bookmarkIcon"/>
            <QueryBuilderIcon className="sidebar__ordersIcon"/>
            </div>
            
         <Link to="/login">   <div className="sidebar__userInfo">
           
               <Avatar  src={user?.photoURL} />
               
               
            </div>
            </Link>
        </div>
    )
}

export default Sidebar

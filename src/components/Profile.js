import React from 'react'
import './Profile.css'
import {auth} from '../firebase'
import { useStateValue } from './StateProvider'
import {useHistory} from 'react-router-dom'
import Footer from './Footer'


const Profile = () => {
    const history =useHistory()
    const [{user},dispatch]=useStateValue()
    const handleSignOut=()=>{
        if(user){
           auth.signOut()
           .then(()=>{
               alert("successfully signed out")
               history.push('/')
           })

        }
    }
    return (
        <div className="profile">
      <div className="profile__header">
        <img className="profile__avatar" src={user.photoURL} />
        <span>
          <h3>Hi,{user.displayName} </h3>
          <p style={{ maxWidth: "480px", marginBottom: "2rem", opacity: 0.5 }}>
            This is your profile page. Here, you can view and customize your
            profile details. Double check your details before check out.
          </p>
        </span>
        <div className="buttons" style={{ marginLeft: "auto" }}>
          <button
            className="buttonRed"
            onClick={handleSignOut}
            style={{ padding: "1rem 1.5rem" }}
          >
            Sign Out
          </button>
        </div>
      </div>
  
    </div>
    )
}

export default Profile

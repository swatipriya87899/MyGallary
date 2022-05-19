import React from "react";
import "./Navbar.css";
import swati_avatar from "../Images/Swati_Pic.jpg";
import Searchbar from "./Searchbar";

const Navbar = (props) => {
  return (
    <div className="navbar">
      {/* Website Name */}
      <div className="website_name">MyGallary</div>

      {/* Search Box */}
      <Searchbar
        search_input={props.search_input}
        placeholder="photos, people, group"
      ></Searchbar>

      {/* Avatar */}
      <div className="profile">
        <div className="avatar">
          <img
            src={swati_avatar}
            alt="avatar"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          ></img>
        </div>
        <div className="avatar_name">Swati Priya</div>
      </div>
    </div>
  );
};

export default Navbar;

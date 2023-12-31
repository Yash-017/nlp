import React from "react";
import "./Sidebar.css";
import { Route, Routes, Link } from "react-router-dom"
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


function Sidebar() {
  return (
    <div className="sidebar">
      

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Search"  />      
      <SidebarOption Icon={MailOutlineIcon} text="Play" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Add To Playlist" />
      <SidebarOption Icon={ListAltIcon} text="Rate" />
      
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />



      

      
    </div>
  );
}

export default Sidebar;
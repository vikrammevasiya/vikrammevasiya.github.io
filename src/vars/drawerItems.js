import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import WorkIcon from "@material-ui/icons/Work";
import ContactsIcon from "@material-ui/icons/Contacts";

export var upperItems = [
  {
    myName: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  // {
  //     myName: 'About',
  //     icon: <InfoIcon/>
  // },
  {
    myName: "Skills",
    icon: <SettingsIcon />,
    to: "/skills",
  },
  // {
  //     myName: 'Projects',
  //     icon: <WorkIcon/>,
  //     to: '/projects'
  // },
  {
    myName: "Contact",
    icon: <ContactsIcon />,
    to: "/contact",
  },
];

export const lowerItems = [
  {
    myName: "Facebook",
    URL: "https://www.facebook.com/mevasiya.vikram",
  },
  {
    myName: "Twitter",
    URL: "https://twitter.com/vikram_mevasiya",
  },
  {
    myName: "Instagram",
    URL: "https://www.instagram.com/vikrammevasiya",
  },
];

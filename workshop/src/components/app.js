import React from "react";

import UserHeader from "./UserHeader.js";
import getUserData from "../utils/getUserData.js";

export default function App() {
    const [userData, setUserData] = React.useState({name:"Hold on...", avatar_url:"https://i0.wp.com/codemyui.com/wp-content/uploads/2015/09/spinner-loader-animation.gif?fit=880%2C440&ssl=1"});
    
    React.useEffect( () => {
      const username = "Roger-Heathcote";
      getUserData(username).then( val => {
        console.log(val);
        setUserData(val);
       });
    }, []);

    return <div><UserHeader userData = {userData}/></div>;
  }



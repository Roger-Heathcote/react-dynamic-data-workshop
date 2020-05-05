import React from "react";

function UserHeader({userData: {name, avatar_url}}) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={avatar_url}></img>
        </div>
    )
}
export default UserHeader;

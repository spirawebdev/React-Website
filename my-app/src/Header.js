import React from "react"

function Header() {
    return(
        <div className="parallax">
            <h1 className="title">Hey</h1>
           <img src={require("./parallax-photo.jpg")} alt="Background"></img>
        </div>
    )
}



export default Header
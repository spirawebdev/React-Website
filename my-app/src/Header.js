import React from "react"
import { Parallax } from "react-parallax"

const image1 = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2660&q=80"

const inlineStyle = {
    background: "#fff",
    left: "40%",
    top: "40%",
    position: "absolute",
    padding: "20px",
    transform: "translate",
    font: "roboto",

}

function Header() {
    return(
        <div className="parallax">
            <Parallax bgImage={image1}>
                <div style={{height:500}}>
                    <div style={inlineStyle}>HTML Inside the parallax</div>
                </div>
            </Parallax>
        </div>
    );
}



export default Header
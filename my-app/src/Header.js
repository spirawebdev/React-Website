import React from "react"
import { Parallax } from "react-parallax"

const image1 = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2660&q=80"

const inlineStyle = {
    background: "#fff",
    marginLeft: "-300px",
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-30%, -30%,)",
   

}

function Header() {
    return(
        <div className="parallax">
            <Parallax bgImage={image1} strength={600}>
                <div style={{height:800}}>
                    <div style={{Align:"center"}}>
                    <div style={inlineStyle}>Hi, I'm Anthony. I'm a Front End Web Developer.</div>
                    </div>
                </div>
            </Parallax>
            <div style={{ height: "5vh"}}></div>
        </div>
    );
}



export default Header
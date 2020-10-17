import React from "react"
import { Parallax } from "react-parallax"

const image2 = "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"

const inlineStyle = {
    background: "#fff",
    marginLeft: "-100px",
    left: "50%",
    top: "30%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-30%, -30%,)",
    
    
   

}

const paragraphStyle = {
    background: "#fff",
    marginLeft: "100px",
    marginRight: '100px',
    left: "",
    top: "60%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-30%, -30%,)",
    fontSize: ".8em",
   

}

function About() {
    return(
        <div className="parallax" style={{textAlign: 'center'}}>
            <Parallax bgImage={image2} blur={{ min: -1, max: 7}}>
                <div style={{height:1000}}>
                    <div style={inlineStyle}>About Us</div>
                    <div style={paragraphStyle}>At spira web development we hope to have your every dream com true. With over 1 year of web development experience we promise to deliver to you the most satisfying of products. </div>
                </div>
            </Parallax>
            <div style={{ height: "3vh"}}></div>
        </div>
    );
}



export default About
import React from "react"
import Slider from "./components/Slider"

const App = () => {
  //nase slike u nizu, stavio sam relativnu putanju
  const images = [
    '/slike/slider-image-1.jpg',
    '/slike/slider-image-2.jpg',
    '/slike/slider-image-3.jpg',
    '/slike/slider-image-4.jpg',
    '/slike/slider-image-5.jpg',
    '/slike/slider-image-6.jpg',
    '/slike/slider-image-7.jpg',
    '/slike/slider-image-8.jpg',
    '/slike/slider-image-9.jpg' 
  ]

  const containerStyle = {
    height: "400px",
    margin: "80px 5px 100px 0px",
    flex: "50%" 
  }

  const p = {
    flex: "50%",
    margin: "100px 0px 100px 10px"
  }

  return (
    <div>
      <div>
        <h1 style={{textAlign: "center"}}>Factory zadatak: Slider</h1>
        <h2 style={{textAlign: "center"}}>Tomislav Damjanović</h2>
      </div>
      <div style={{display: "flex"}}>
        <div style={containerStyle}>
          <Slider images={images} />
        </div>
        <div style={p}>
          <h2 style={{color: "darkblue"}}>Lorem ipsum dolor sit amet consectetuer adipiscing elit </h2>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
        </div>
      </div>
    </div>
  )
}

export default App
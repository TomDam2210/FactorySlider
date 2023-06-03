import React, { useState } from 'react'

//Slider komponenta koja će mi služiti za prikazivanje Slidera sa slikama. 
//Kao props prima slike koje su spremljene u public/slike
const Slider = ({ images }) => {
  //stanje trenutnog indexa je najlakse pratit preko useState hooka
  const [currentIndex, setCurrentIndex] = useState(0)

  const sliderStyles = {
    height: "100%",
    position: "relative"
  }

  //Koristio sam inline stiliranje, odnosno slao sam ove objekte kao props
  //za slike
  const imageStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${images[currentIndex]})`,
    transition: "background-image 0.5s ease-in-out"
  }

  //botun za nazad
  const prevButton = {
    position: "absolute",
    top: "45%",
    transform: "translate(0,-50%)",
    right: "10px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  }

  //botun za naprijed
  const nextButton = {
    position: "absolute",
    top: "60%",
    transform: "translate(0,-50%)",
    right: "10px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  }

  //funkcija za klik nazad
  const gotoPrev = () => {
    //index će biti 0 za prvu sliku
    const isFirstImg = currentIndex === 0
    //koristio sam ternarni operator
    //ako je prva slika u nizu, postavi newIndex na zadnju sliku u nizu, ako nije, nastavi dalje unazad
    const newIndex = isFirstImg
    ? images.length - 1
    : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  //funkcija za klik naprijed
  const gotoNext = () => {
    //index će biti ukupna duljina slika - 1 za zadnju sliku
    const isLastImg = currentIndex === images.length - 1
    //postavi newIndex na index prve stranice ako je smo na zadnjoj slici, ako nismo onda idi dalje unaprijed
    const newIndex = isLastImg
    ? 0
    : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div style={sliderStyles}>
      <div style={prevButton} onClick={gotoPrev}>⍃</div>
      <div style={nextButton} onClick={gotoNext}>⍄</div>
      <div style={imageStyles}></div>
    </div>
  )  
}

export default Slider

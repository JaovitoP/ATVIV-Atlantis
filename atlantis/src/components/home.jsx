import React from 'react';
import img1 from '../assets/resort.jpg'
import img2 from '../assets/resort2.jpg'
import img3 from '../assets/beach.jpg'
import img4 from '../assets/beach2.jpg'
function Home(props){
    return(
        <div>
        <h1 className='has-text-black'>Bem-vindo ao Atlantis! Mergulhe em um mundo de diversão com toboáguas emocionantes e piscinas relaxantes, perfeito para todas as idades. Venha viver aventuras inesquecíveis conosco!</h1>
        <div className='is-flex p-5'>
            <div className='is-justify-content-center is-clickable container pr-5'><img className='image is-5by3' src={img1} alt="" onClick={(e) => props.seletorView('Home', e)} /></div>
            <div className='is-justify-content-center is-clickable container'><img className='image is-5by3' src={img2} alt="" onClick={(e) => props.seletorView('Home', e)} /></div>     
        </div>
        <div className='is-flex p-5'>
            <div className='is-justify-content-center is-clickable container pr-5'><img className='image is-5by3' src={img3} alt="" onClick={(e) => props.seletorView('Home', e)} /></div>
            <div className='is-justify-content-center is-clickable container'><img className='image is-5by3' src={img4} alt="" onClick={(e) => props.seletorView('Home', e)} /></div>
        </div>
    </div>
    )
}
export default Home;
import React from 'react';
import frontImage from '../assets/images/cleaning_handyman.jpeg';


export default function Home() {

    return (
        <div className="card" >

            <h1> Welcome!</h1>
            <img className='main-image' src={frontImage} alt='Handyman cleaning image'></img>
            <p>Click the button below to start making memes!</p>
        </div>
    );
}
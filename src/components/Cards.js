import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Future is now!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Build with gear protocol'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='SocialImpact'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Social change'
              label='Mystery'
              path='/services'
            />
      
            <CardItem
              src='images/img-8.jpg'
              text='Catch the noggles'
              label='Adrenaline'
              path='/play'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, text, image} = people[index];

  const numChecker= (number) => {
     if (number < 0) {
      return people.length-1
    }
    if (number > people.length-1){
      return 0
    }
    else return number;
  }

  const prevReview= ()=>{
    setIndex((index) => {
      return (numChecker(index-1))
    } )

  };

  const nextReview= ()=>{
    setIndex((index) => {
      return (numChecker(index+1))
    } )

  };

  const randomPerson = () => {
    setIndex(() => {
      return (Math.floor(Math.random()*people.length))
    })
  }


  return <div className='review'>
    <div className='img-container'>
      <img className='person-img' src={image} alt={name}/>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn'onClick={prevReview} >
        <FaChevronLeft />
      </button>
      <button className='next-btn'onClick={nextReview} >
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>Random Review</button>
  </div>;
};

export default Review;

import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [review,setReview] = useState(0);
  const {name ,job , image , text} = people[review];

  const checkNum = (number) =>{
      if(number > people.length -1 ){
          return 0;
      }
      if(number < 0){
          return people.length -1;
      }
      return number;
  }

  const nextPerson = () =>{
      setReview((review) => {
          let newReview = review+1;
          return checkNum(newReview);
      })
    }

    const prevPerson = () => {
        setReview((review) => {
            let newReview = review - 1;
            return checkNum(newReview);
        })
    }

    const randomPerson = () =>{
      let rnd = Math.floor(Math.random() * people.length);
      if(rnd === review){
          rnd = review +1;
      }
      setReview(checkNum(rnd));
    }
  return (
      <article className='review'>
          <div className='img-container'>
              <img src={image} alt={name} className='person-img'/>
              <span className='quote-icon'>
                  <FaQuoteRight/>
              </span>
          </div>
          <h4 className='author'>
              {name}
          </h4>
          <p className='job'>{job}</p>
          <p className='text'>{text}</p>
          <div className="button-container">
              <button className='prev-btn' onClick={prevPerson}>
                  <FaChevronLeft/>
              </button>
              <button className='next-btn' onClick={nextPerson}>
                  <FaChevronRight/>
              </button>
          </div>
          <button className='random-btn' onClick={randomPerson}>
              Surprise Me
          </button>
      </article>
  );
};

export default Review;

import React, { useState } from 'react';
import data from '../../productDetails';
import testImage from '../../media/product/testMore.png';

import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export default function ProductMoreDetails({ product }) {
  const { description1, description2 } = product;
  const info = data;
  const [value, setValue] = useState(0);

  return (
    <section className='section details'>
      <div className='container details__container'>
        <div className='details__text'>
          <h2>Everything you need to know</h2>
          <div className='details__dropdown'>
            {info.map((detail) => {
              return (
                <div className='details__info' key={detail.id}>
                  <div className='details__menu'>
                    <h4>{detail.name}</h4>
                    <button onClick={() => setValue(detail.id - 1)}>
                      {value + 1 === detail.id ? (
                        <AiOutlineUp className='arrow' />
                      ) : (
                        <AiOutlineDown className='arrow' />
                      )}
                    </button>
                  </div>
                  {value + 1 === detail.id && (
                    <div className='details__content'>
                      <p>{detail.text}</p>
                      <img src={description1} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className='details__image'>
          <img src={description1} alt='sofa' />
          <img src={description2} alt='sofa' />
        </div>
      </div>
    </section>
  );
}

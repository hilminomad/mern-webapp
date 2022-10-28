import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import heroBg from '../../media/shop/shopHeroBg.jpg';
import palmBg from '../../media/shop/palmBg.jpg';
import floatingBg from '../../media/shop/floating_topright.png';

// all products layout

export default function Shop() {
  // used to change image when hovering over a product
  const [isShown, setIsShown] = useState(-1);

  // fetching product from the api with useQuery
  const { isLoading, error, data } = useQuery('product', () =>
    axios.get(`/api/v1/products/`)
  );
  return (
    <>
      <section
        className='hero sustainability'
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className='hero__container sustainability__container'>
          <div className='hero__textbox '>
            <h1>All Furniture</h1>
          </div>
        </div>
      </section>
      <section
        className='expectMore section shop'
        style={{ backgroundImage: `none` }}
      >
        <img src={floatingBg} alt='decoration' className='shop__floatingbg' />
        <div className='container'>
          <h2>All Products</h2>
          <div className='swatches__gridcontainer'>
            <div className='swatches__grid_innercontainer'>
              {isLoading ? (
                <p>loading</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                //maping on products
                data.data.products.map((product, index) => {
                  const { _id, title, price, image, description } = product;
                  console.log(_id);
                  const url = `/product/${_id}`;
                  return (
                    <Link to={url}>
                      <div
                        onMouseEnter={() => setIsShown(index)}
                        onMouseLeave={() => setIsShown(-1)}
                        className={
                          isShown === index
                            ? 'swatches__card shop__card shop__image_hover'
                            : 'swatches__card shop__card'
                        }
                        style={
                          isShown === index
                            ? { backgroundImage: `url(${description})` }
                            : { backgroundImage: `none` }
                        }
                        key={index}
                      >
                        <img src={image} alt='SHADOW UPCYCLED POLY' />
                        <div
                          className={
                            isShown === index
                              ? 'swatches__text_container  initiative shop__text_container '
                              : 'swatches__text_container  initiative shop__text_container shop__hover_effect'
                          }
                        >
                          <p>{title}</p>
                          <p>{price}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        className='expectMore section'
        style={{ backgroundImage: `url(${palmBg})` }}
      >
        <div className='container'>
          <h2>Sustainability is not a buzzword – it’s our blueprint</h2>
          <h4>
            We’re closing the loop and combatting furniture waste with
            innovative earth-friendly solutions.
          </h4>
          <div className='btn'>
            <button>
              <Link to='/sustainablty'>learn more</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

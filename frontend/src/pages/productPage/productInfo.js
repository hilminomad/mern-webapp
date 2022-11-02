import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
  Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import log from '../../media/product/Log.png';
import bunny from '../../media/product/Bunny.png';
import recycle from '../../media/product/Recycle.png';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';

export default function ProductInfo({ product }) {
  const isMobile = useMediaQuery({ query: '(max-width: 47.5em)' });
  const { price, details, colors } = product;
  const [imgArr, setImgArr] = useState(colors[0]);
  console.log(imgArr);

  console.log();
  return (
    <React.Fragment>
      <div className='product__info'>
        <div className='product__pictures'>
          <div className='product__pictures_container'>
            <CarouselProvider
              naturalSlideWidth={isMobile ? 120 : 100}
              naturalSlideHeight={isMobile ? 100 : 80}
              totalSlides={3}
            >
              <Slider>
                {imgArr.map((image, index) => (
                  <Slide index={index} key={image}>
                    <Image src={image} />
                    {console.log(image)}
                  </Slide>
                ))}
              </Slider>
              <div className='product__pictures_nav'>
                <ButtonBack className='arrow'>
                  <AiOutlineLeft />
                </ButtonBack>
                <DotGroup className='dots'>
                  {imgArr.map((_, index) => (
                    <Dot slide={index} key={index} className='dot'>
                      o
                    </Dot>
                  ))}
                </DotGroup>
                <ButtonNext className='arrow'>
                  <AiOutlineRight />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
        <div className='product__infotext'>
          <h2>The Essential Sectional</h2>
          <div className='price'>
            <h4>{price}</h4>
            <p>shipping and taxes are calculated at checkout</p>
          </div>
          <div className='qualities'>
            <div className='qualities__block'>
              <img src={bunny} alt='bunny' />
              <p>No Toxic Off-Gassin</p>
            </div>
            <div className='qualities__block'>
              <img src={log} alt='log' />
              <p>FCS Certified wood</p>
            </div>
            <div className='qualities__block'>
              <img src={recycle} alt='recycle' />
              <p>Recycled & Upcycled Fibers</p>
            </div>
          </div>
          <div className='line'></div>
          <div className='choose'>
            <h4>Choose Fabric</h4>
            <p>UPCYCLED VELVET</p>
            <div className='swatches__gridcontainer'>
              <div className='swatches__grid_innercontainer fabric'>
                <div
                  className='swatches__card'
                  onClick={() => setImgArr(colors[0])}
                >
                  <img
                    src='https://cdn.shopify.com/s/files/1/0089/4487/7630/products/4_9dc97677-5b82-40a8-99e8-36e1e14addf7_600x400.jpg?v=1618796829'
                    alt='INDIGO RECYCLED VELVET'
                  />
                  <div className='swatches__text_container initiative'>
                    <p>INDIGO RECYCLED VELVET</p>
                  </div>
                </div>
                <div
                  className='swatches__card'
                  onClick={() => setImgArr(colors[2])}
                >
                  <img
                    src='https://cdn.shopify.com/s/files/1/0089/4487/7630/products/6_64a0e0f4-6539-4288-8527-3f21dc8b34c6_600x400.jpg?v=1618796923'
                    alt='MUSTARD RECYCLED VELVET'
                  />
                  <div className='swatches__text_container initiative'>
                    <p>MUSTARD RECYCLED VELVET</p>
                  </div>
                </div>
                <div
                  className='swatches__card'
                  onClick={() => setImgArr(colors[1])}
                >
                  <img
                    src='https://cdn.shopify.com/s/files/1/0089/4487/7630/products/5_db0c1258-330e-4e2a-999c-363b934eacf6_600x400.jpg?v=1618796901'
                    alt='MOSS RECYCLED VELVET'
                  />
                  <div className='swatches__text_container initiative'>
                    <p>MOSS RECYCLED VELVET</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='more'>
            <h4>Details</h4>
            <p>{details}</p>
          </div>
          <div className='btn'>
            <button className='btn'>ADD TO CART</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

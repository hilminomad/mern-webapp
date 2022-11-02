import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import ProductInfo from './productInfo';
import ProductMoreDetails from './productMoreDetails';

export default function ProductPage() {
  const { productId } = useParams();
  const fetchProduct = async () => {
    const product = await axios.get(`/api/v1/products/${productId}`);
    console.log(product);
    let color = product.data.product.colors;
    let newProduct = product;
    let colorsArr = [
      [color[0].blue[0].img1, color[0].blue[0].img2, color[0].blue[0].img3],
      [color[1].green[0].img1, color[1].green[0].img2, color[1].green[0].img3],
      [
        color[2].mustard[0].img1,
        color[2].mustard[0].img2,
        color[2].mustard[0].img3,
      ],
    ];
    console.log(newProduct.data.product.colors);
    newProduct.data.product.colors = colorsArr;
    console.log(newProduct.data.product.colors);
    console.log(colorsArr);
    console.log(newProduct);
    return newProduct;
  };

  const { isLoading, error, data } = useQuery('product', fetchProduct);
  //const { isLoading, error, data } = useQuery('product', () =>
  //  axios.get(`/api/v1/products/${productId}`)
  //);
  if (isLoading) return <p>isLoading</p>;
  if (error) return <p>failed to load</p>;
  return (
    <>
      <section className='section product'>
        <div className='container'>
          <div className='product__path'>
            <p>
              <Link to='/'>home</Link> &gt; <Link to='/shop'>products</Link>{' '}
              &gt; <p>{data.data.product.title}</p>
            </p>
          </div>
          <ProductInfo product={data.data.product} />
        </div>
      </section>
      <ProductMoreDetails product={data.data.product} />
      */
    </>
  );
}

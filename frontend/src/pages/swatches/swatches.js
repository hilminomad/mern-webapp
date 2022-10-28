import  React from 'react'
import { Link } from 'react-router-dom'

export   default     function   Swatches()
{
	return(
		<>
			<section className="section swatches">
				<div className="swatches__container">
					<div className="swatches__textcontainer">
						<h2>Swatches</h2>
						<h4>Swatch and feel the difference.<br/>Get to know our fabrics firsthand.</h4>
						<p>Order one of each swatch, on us.<br/>Add to cart and check out to<br/>order.</p>
					</div>
					<div className="swatches__imgwrapper">
						<img src="	https://cdn.shopify.com/s/files/1/0089/4487/7630/files/swatches_820x700.jpg?v=1618510306" alt="swatches" />
					</div>
				</div>
			</section>
			<section className="section">
				<div className="swatches__secondcontainer">
					<div className="swatches__subtitlecontainer">
						<h2>Upcycled poly</h2>
						<div className="btn">
							<button><Link to="/cart">add to cart</Link></button>
						</div>

					</div>
					<p>Soft and breathable, our woven Upcycled Poly is the greenest textile around. Made from 100% upcycled Olefin which requires no land or water for production.</p>
					<p>Ships in a pack with one of each color swatch.</p>
					<div className="swatches__gridcontainer">
						<div className="swatches__grid_innercontainer">
							<div className="swatches__card" >
								<img src="	https://cdn.shopify.com/s/files/1/0089/4487/7630/products/2__Tone_600x400.png?v=1625169715" alt="SHADOW UPCYCLED POLY" />
								<div className="swatches__text_container initiative"><p>SHADOW UPCYCLED POLY</p></div>
							</div>
							<div className="swatches__card" >
								<img src="https://cdn.shopify.com/s/files/1/0089/4487/7630/products/3_3a951c30-c8dc-4195-b715-35de33bae85b_600x400.jpg?v=1618796874" alt="FARRO UPCYCLED POLY" />
								<div className="swatches__text_container initiative"><p>FARRO UPCYCLED POLY</p></div>
							</div>
							<div className="swatches__card" >
								<img src="https://cdn.shopify.com/s/files/1/0089/4487/7630/products/1_0f4f981c-7385-4df1-bf8c-ee6eba3d9742_600x400.jpg?v=1618796854" alt="OAT UPCYCLED POLY" />
								<div className="swatches__text_container initiative"><p>OAT UPCYCLED POLY</p></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="swatches__secondcontainer">
					<div className="swatches__subtitlecontainer">
						<h2>Recycled Velvet</h2>
						<div className="btn">
							<button><Link to="/cart">add to cart</Link></button>
						</div>
					</div>
					<p>Our Recycled Velvet is so buttery and rich that you'd never guess it is made from 100% recycled bottles. 400 bottles, to be exact, are used to make our Essential Sofa.</p>
					<p>Ships in a pack with one of each color swatch</p>
					<div className="swatches__gridcontainer">
						<div className="swatches__grid_innercontainer">
							<div className="swatches__card" >
								<img src="https://cdn.shopify.com/s/files/1/0089/4487/7630/products/8_93bfadee-9ba0-4df9-a77a-f04a4f8269fa_600x400.jpg?v=1618796976" alt="SEAFOAM RECYCLED VELVET" />
								<div className="swatches__text_container initiative"><p>SEAFOAM RECYCLED VELVET</p></div>
							</div>
							<div className="swatches__card" >
								<img src="https://cdn.shopify.com/s/files/1/0089/4487/7630/products/6_64a0e0f4-6539-4288-8527-3f21dc8b34c6_600x400.jpg?v=1618796923" alt="MUSTARD RECYCLED VELVET" />
								<div className="swatches__text_container initiative"><p>MUSTARD RECYCLED VELVET</p></div>
							</div>
							<div className="swatches__card" >
								<img src="https://cdn.shopify.com/s/files/1/0089/4487/7630/products/5_db0c1258-330e-4e2a-999c-363b934eacf6_600x400.jpg?v=1618796901" alt="MOSS RECYCLED VELVET" />
								<div className="swatches__text_container initiative"><p>MOSS RECYCLED VELVET</p></div>
							</div>
							<div className="swatches__card" >
								<img src="https://cdn.shopify.com/s/files/1/0089/4487/7630/products/4_9dc97677-5b82-40a8-99e8-36e1e14addf7_600x400.jpg?v=1618796829" alt="INDIGO RECYCLED VELVET" />
								<div className="swatches__text_container initiative"><p>INDIGO RECYCLED VELVET</p></div>
							</div>
							<div className="swatches__card" >
								<img src="https://cdn.shopify.com/s/files/1/0089/4487/7630/products/7_e4d3b860-98b6-4628-bcc4-76b2bf389029_600x400.jpg?v=1618796803" alt="DUSTY ROSE RECYCLED VELVET" />
								<div className="swatches__text_container initiative"><p>DUSTY ROSE RECYCLED VELVET</p></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>

	)
}
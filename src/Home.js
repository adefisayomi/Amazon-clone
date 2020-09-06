import React from "react";
import Product from "./Product"
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
      />
    <div className= "home__row">
      <Product
        id="12345"
        title="Lean startup"
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
      />
       <Product
        id="12345"
        title="Lean startup"
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
      />
      </div>
      <div className= "home__row">
      <Product
        id="12345"
        title="Lean startup"
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
      />
      </div>
      <div className= "home__row">
      <Product
        id="12345"
        title="Lean startup"
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
      />
      <Product
        id="12345"
        title="Lean startup"
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
      />
      <Product
        id="12345"
        title="Lean startup"
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
      />
      </div>
    </div>
  );
}

export default Home;

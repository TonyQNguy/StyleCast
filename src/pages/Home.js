import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import characterImage from "../components/images/character.png";
import ItemList from '../components/ItemList';

const Home = () => {
  const [items, setItems] = useState ([ 
    {
      id: 'u1',
      image: 'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1683221433/748475_4HG62_5872_001_100_0000_Light.jpg',
      name: 'Baseball Cap',
      category: 'Accs.',
      preference: 'Hot',
    },
    {
      id: 'u2',
      image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/439067/item/goods_50_439067.jpg',
      name: 'Waffle Shirt',
      category: 'Shirts',
      preference: 'Cold',
    },
    {
      id: 'u3',
      image: 'https://m.media-amazon.com/images/I/61WRtucSY5L._AC_SY741_.jpg',
      name: 'Cargo Pants',
      category: 'Pants',
      preference: 'Cold',
    },
  ]);

  const addItemHandler = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <div className="loginBtn">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
      <div className="home-container">
        {/* Top Section - Weather Metrics */}
        <div className="top-section">
          {/* Weather metric fields go here */}

          {/* <div className="weather-metric-temperature">65°</div> */}
          <div className="headers">
            <h1>StyleCast</h1>
            <h3>Your go-to fashion forecast</h3>
          </div>
          <div className="data">
            <div className="top-left">
              <div>Now: 65°</div>
              <div className="weather-metric-condition">Mostly Sunny</div>
              <div className="weather-metric-high">High: 80°</div>
              <div className="weather-metric-low">Low: 50°</div>
            </div>

            <div className="top-right">
              <div className="weather-metric-humidity">Humidity: 62%</div>
              <div className="weather-metric-feelsLike">Feels Like: 67°</div>
              <div className="weather-metric-windSpeed">Wind Speed: 5 km/h</div>
              <div className="weather-metric-precip">Precipitation: --</div>
            </div>
            {/* Add more weather metrics as needed */}
          </div>
        </div>
        <div className="person-container">
          {/* Middle Section - Grid with Character and Clothing Choices */}
          <div className="middle-section">
            <div className="grid-container">
              {/* Top Left - Top*/}
              <div className="grid-item top-left">
                <Link to="/edit">
                  <button className="clothing-button">
                    Top
                    <div className="clothing-icon">👕</div>
                  </button>
                </Link>
              </div>

              {/* Top Center*/}
              <div className="grid-item top-center"></div>

              {/* Top Right - Accessories*/}
              <div className="grid-item top-right">
                <Link to="/edit">
                  <button className="clothing-button">
                    Accessories
                    <br></br>
                    <div className="clothing-icon">🕶️</div>
                  </button>
                </Link>
              </div>

              {/* Middle Left*/}
              <div className="grid-item middle-left"></div>

              {/* Middle Middle - (Character Image) */}
              <div className="grid-item middle-center">
                {/* Add your character image here */}
                <img
                  src={characterImage}
                  alt="Character"
                  className="character-image"
                />
              </div>

              {/* Middle Right*/}
              <div className="grid-item middle-right"></div>

              {/* Bottom Left - Bottom */}
              <div className="grid-item bottom-left">
                <Link to="/edit">
                  <button className="clothing-button">
                    Bottom
                    <div className="clothing-icon">👖</div>
                  </button>
                </Link>
              </div>

              {/* Bottom Middle*/}
              <div className="grid-item bottom-center"></div>

              {/* Bottom Right - Shoes*/}
              <div className="grid-item bottom-right">
                <Link to="/edit">
                  <button className="clothing-button">
                    Shoes
                    <div className="clothing-icon">👟</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ItemList items={items}/>
    </div>
  );
};

export default Home;

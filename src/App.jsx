import './App.css';
import PropTypes from "prop-types";


const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <div className="card_header"></div>
      <h2 className="title">{title}</h2>
      <p className="price">${price}/month</p>
      <hr></hr>
      <div className="features">
        {features.map((feature, data) => (
          <div key={data.id} className="feature">
            <span className="feature-text">{feature}</span>
          </div>
        ))}
      </div>
      {title === "PRO" ? (
        <button className="buy-PRO">Buy Now</button>
      ) : (
        <button className="buy-button">Buy Now</button>
      )}
    </div>
  );
};

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const App = () => {
  const priceCardsData = [
    {
      title: "FREE",
      price: 0,
      features: [
        <ul key={0}>
          <li className="list_checked">Single User</li>
          <br />
          <li className="list_checked">5GB Storage</li>
          <br />
          <li className="list_checked">Unlimited Public Projects</li>
          <br />
          <li className="list_checked">Community Access</li>
          <br />
          <li className="text-muted">Unlimited Private Projects</li>
          <br />
          <li className="text-muted">Dedicated Phone Support</li>
          <br />
          <li className="text-muted">Free Subdomain</li>
          <br />
          <li className="text-muted">Monthly Status Reports</li>
         
        </ul>,
      ],
    },
    {
      title: "PLUS",
      price: 9,
      features: [
        <ul key={1}>
          <li className="list_checked">5 Users</li>
          <br />
          <li className="list_checked">50GB Storage</li>
          <br />
          <li className="list_checked">Unlimited Public Projects</li>
          <br />
          <li className="list_checked">Community Access</li>
          <br />
          <li className="list_checked">Unlimited Private Projects</li>
          <br />
          <li className="list_checked">Dedicated Phone Support</li>
          <br />
          <li className="list_checked">Free Subdomain</li>
          <br />
          <li className="text-muted">Monthly Status Reports</li>
          
        </ul>,
      ],
    },
    {
      title: "PRO",
      price: 49,
      features: [
        <ul key={2}>
          <li className="list_checked">Unlimited User</li>
          <br />
          <li className="list_checked">150GB Storage</li>
          <br />
          <li className="list_checked">Unlimited Public Projects</li>
          <br />
          <li className="list_checked">Community Access</li>
          <br />
          <li className="list_checked">Unlimited Private Projects</li>
          <br />
          <li className="list_checked">Dedicated Phone Support</li>
          <br />
          <li className="list_checked">Unlimited Free Subdomains</li>
          <br />
          <li className="list_checked">Monthly Status Reports</li>
          
        </ul>,
      ],
    },
  ];

  return (
    <div className="app">
      {priceCardsData.map((data) => (
        <PriceCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default App;

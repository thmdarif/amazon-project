import React from "react";
import "./Checkout.css";
import {useSelector} from "react-redux";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import SubTotal from "../../components/SubTotal/SubTotal";

const Checkout = () => {
const {basket,user} = useSelector(state => state.data);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img 
          className="checkout-ad"
          src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/15d010310e340b2b.jpg?q=50"
          alt=""
        />
      
      <div>
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout-title">
          {basket.length === 0 
            ? "Your Shopping Basket is Empty"
            : "Your Shopping Basket"}
        </h2>
        {basket && 
          basket.map((item) => (
            <CheckoutProduct 
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </div>
      </div>
      <div className="checkout-right">
        <SubTotal />   
      </div>
    </div>
  );
};

export default Checkout;
/*https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg*/
/*https://socialb.co.uk/wp-content/uploads/2021/09/social-b-blog-banner-1500x450.png*/ 
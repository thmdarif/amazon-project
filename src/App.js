import React, {useEffect, lazy, Suspense } from "react";
import "./App.css"; 
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from "react-router-dom";
//import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
//import Login from "./pages/Login/Login";
//import Register from "./pages/Register/Register";
import {useDispatch}  from "react-redux";
import {auth} from "./utils/firebase";
import { setuser } from "./redux/actions";
//import SingleProduct from "./pages/SingleProduct/SingleProduct";
//import Checkout from "./pages/Checkout/Checkout";
//import Payment from "./pages/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Loading from "./components/Loading/Loading";

//import Orders from "./pages/Orders/Orders";

const Home= lazy(() => import ("./pages/Home/Home"));
const Login= lazy(() => import ("./pages/Login/Login"));
const Register= lazy(() => import ("./pages/Register/Register"));
const Checkout= lazy(() => import ("./pages/Checkout/Checkout"));
const Payment= lazy(() => import ("./pages/Payment/Payment"));
const Orders= lazy(() => import ("./pages/Orders/Orders"));
const SingleProduct= lazy(() => import ("./pages/SingleProduct/SingleProduct"));
const promise = loadStripe(
"pk_test_51MkgNiSGlzDsP5GtUkXY26Go7Nz7tXAOrxPIXNzlok26g3EX961RqgnrHEVwMvPId0o2QhHJdbG9aPQbnRosovF600dkJKHXQd"
);

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
    if(authUser) {
     dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  },[dispatch]);
  return ( 
    <Router>
       <Header />  
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/orders" element={<Orders/>}/>
          </Routes>
          <Routes>
          <Route path="/payment" element={
           <Elements stripe={promise}>
           <Payment/>
           </Elements>
           }/>
          </Routes>
          <Routes>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
          <Routes>
            <Route path="/product/:id" element={<SingleProduct/>}/>
          </Routes>
          <Routes>
            <Route path="/register" element={<Register />}/>
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />}/>
          </Routes>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/" element={<Header />}/>
          </Routes>
        </Suspense>
      </div>
    </Router>    
  );
};

export default App;
 
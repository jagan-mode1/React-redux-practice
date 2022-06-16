import React, { useState, useEffect } from 'react';  
import { connect, useSelector, useDispatch  } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import { setProducts } from "../../Redux/Actions";
import "../Functional-components/about.css"
axios.defaults.baseURL = 'https://restcountries.eu';
  
function About(props) {  
  // Declare a new state variable, which we'll call "count" 
  let products = useSelector(state => state.allProducts.products);
  const { id, title, image, price, category } =  products[0];
  const [searchTerm, setSearchTerm] = useState("");

  console.log("---products---", products);


    const handleChange = (e) => {
        console.log('handle change called');
        console.log('e.target.value', e.target.value);
        setSearchTerm(e.target.value);
    }

    const dispatch = useDispatch();
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setProducts(response.data));
    };
  
    useEffect(() => {
      fetchProducts();
      // alert("test");
      // const URL = 'http://akdevapp.duckdns.org:50001/api/caseslist';
      // const USER_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ha2RldmFwcC5kdWNrZG5zLm9yZzo1MDAwMVwvYXBpXC9sb2dpbiIsImlhdCI6MTY1Mjc3ODcyMiwiZXhwIjoxNjUyNzgyMzIyLCJuYmYiOjE2NTI3Nzg3MjIsImp0aSI6IkwwVGVOQTVEWjdJelhtb1AiLCJzdWIiOiI2MTdhODhhNmFkMTQwMDAwOTMwMDNmZjIiLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.aPJrWRoc_uzRpUb0shTEu82M7M5cRTUNNF4d04ud8kA"
      // const AuthStr = 'Bearer ' + USER_TOKEN;
      // axios.get(URL, { 'headers': { 'Authorization': AuthStr, 'Accept': 'application/json',
      // 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, withCredentials: false })
      // .then(res => {
      //    console.log("--case list--", res);
      // })
    }, []);

  return (  
    <div className="about">
    <div className="search_main">
      <input type="text" placeholder="Search..." onChange={(e) => {handleChange(e)}} />
    </div>
    <div id="cards_landscape_wrap-2">
    <h1>Search functionality</h1>
    <button onClick={() => dispatch(setProducts())}>GET ALL COUNTRIES</button>
        <div className="container">
            <div className="row">
            {products.map((product) => (
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <Link to="/">
                        <div className="card-flyer">
                            <div className="text-box">
                                <div className="image-box">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="text-container">
                                    <h6>{product.title}</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
              ))}
              <p>Count: {products.length} </p>
              
            </div>
        </div>
    </div>
  </div> 
  );  
}  
// Redux Map Dispatch to props

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        setProducts
      },
      dispatch
    );
  };

export default connect(  mapStateToProps,
mapDispatchToProps)(About);
import React, { useState, useEffect } from 'react';  
import { connect, useSelector, useDispatch  } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import { sendFormData } from "../../Redux/Actions";
import SimpleForm from "./SimpleForm";
import showResults from "./ShowResults";
axios.defaults.baseURL = 'https://restcountries.eu';
  
function Contact(props) {  


    const handleChange = (e) => {
        console.log('handle change called');
        console.log('e.target.value', e.target.value);
    }

    const dispatch = useDispatch();

  
    useEffect(() => {
    //   fetchProducts();
    }, []);

  return (  
    <div className="bg_bf">
  
      <div id="">
      <h1>Contact form</h1>
    
          <div className="container">
              <div className="row">
              {/* <button onClick={() => dispatch(sendFormData("jagan send data"))}>Send form data</button> */}
              </div>
              <SimpleForm/>
          </div>
      </div>
  </div> 
  );  
}  
// Redux Map Dispatch to props

// const mapStateToProps = (state) => {
//     return {
//         users: state.users.users
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return bindActionCreators(
//       {
//         sendFormData
//       },
//       dispatch
//     );
//   };

export default connect()(Contact);
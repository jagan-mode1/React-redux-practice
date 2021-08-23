import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from "axios";

class About extends React.Component { 
  constructor(props) { 
      super(props); 
      this.state = { 
        countrylist: [],
        searchTerm: ""
      }; 
  } 
  handleChange (e) {
    console.log('handle change called');
    console.log('e.target.value', e.target.value);
    this.setState({searchTerm: e.target.value});
  }
  componentDidMount() {
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      this.setState({ countrylist: response.data })
    })
    .catch(error => {
     console.log(error);
    });
  }

  render () {

  const { countrylist } = this.state
  console.log("--countrylist--", countrylist);

  return (
    <div className="about">
      <div className="search_main">
        <input type="text" placeholder="Search..." onChange={(e) => {this.handleChange(e)}} />
      </div>
      <div id="cards_landscape_wrap-2">
      <h1>Search functionality</h1>
          <div className="container">
              <div className="row">
              {countrylist.filter( (country) => {
                if (this.state.searchTerm === "") {
                  return country
                } else if (country.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                  return country
                }
              }).map((country) => (
                  <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <Link to="/">
                          <div className="card-flyer">
                              <div className="text-box">
                                  <div className="image-box">
                                      <img src={country.flag} alt="" />
                                  </div>
                                  <div className="text-container">
                                      <h6>{country.name}</h6>
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                  </div>
                              </div>
                          </div>
                      </Link>
                  </div>
                ))}
                
              </div>
          </div>
      </div>
    </div>
  );
  }
}
export default About;
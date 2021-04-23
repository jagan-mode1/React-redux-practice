import React from "react";
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            persons: []
         };
    }
    componentDidMount() {

    }
    shoot = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    render() {
        return (
            <div className="home">
              <h1>Home Component</h1>
              <button onClick={this.shoot}>Take the shot!</button>
              <ul>
                    { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
            
            </div>
        );
    }

}
export default Home;
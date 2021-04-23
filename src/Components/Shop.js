import React, { Component } from 'react';
import { connect } from "react-redux";
import { buyLaptop } from "../Redux/Actions";
import { buyMobile } from "../Redux/Actions";
import { fetchUsers } from "../Redux/Actions";
export class Shop extends Component {
    // state = {
    //     numberOfLaptops: 100,
    // }
    // buyLaptop = () => {
    //     this.setState({
    //         numberOfLaptops: this.state.numberOfLaptops - 1
    //     });
    // }
    render() {
        return (
            <div>
                <h1 className="title" >Welcome to Shop</h1>
                <div className="items">
                    <div className="item">
                        <p>Dell Inspiron laptop</p>
                        <p>Available Items: {this.props.numberOfLaptops} </p>
                        <button onClick={this.props.tisukoLaptop}>BUY LAPTOP</button>
                    </div>
                    <div className="item">
                        <p>Redmi Note 7</p>
                        <p>Available Mobiles: {this.props.numberOfMobiles} </p>
                        <button onClick={this.props.tisukoMobile}>BUY MOBILE</button>
                    </div>
                    <div className="item">
                        <p>Get Users Data</p>
                        <p>Count: {this.props.users.length} </p>
                        <button onClick={this.props.fetchUsers}>Call API</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // numberOfLaptops: state.numOfLaptops,
        numberOfLaptops: state.laptops.numOfLaptops,
        numberOfMobiles: state.mobiles.numOfMobiles,
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return  {
        tisukoLaptop : () => dispatch(buyLaptop()),
        tisukoMobile : () => dispatch(buyMobile()),
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Shop)





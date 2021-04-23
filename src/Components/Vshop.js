import React from "react";
// Redux Connect and bindActionCreators
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
// Redux Actions
import { buyLaptop, buyMobile, fetchUsers } from "../Redux/Actions";
function VShop(props) {
  let numberOfLaptops = useSelector((state) => state.laptops.numOfLaptops);
  let numberOfMobiles = useSelector((state) => state.mobiles.numOfMobiles);
  let users = useSelector((state) => state.users.users);

  return (
    <div>
      <h1 className="title">Welcome to Vshop</h1>
      <div className="items">
        <div className="item">
          <p>Dell Inspiron laptop</p>
          <p>Available Items: {numberOfLaptops} </p>
          <button onClick={props.buyLaptop}>BUY LAPTOP</button>
        </div>
        <div className="item">
          <p>Redmi Note 7</p>
          <p>Available Mobiles: {numberOfMobiles} </p>
          <button onClick={props.buyMobile}>BUY MOBILE</button>
        </div>
        <div className="item">
          <p>Get Users Data</p>
          <p>Count: {users.length} </p>
          <button onClick={props.fetchUsers}>Call API</button>
        </div>
      </div>
    </div>
  );
}

// Redux Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyLaptop,
      buyMobile,
      fetchUsers,
    },
    dispatch
  );
};
// Redux Connect to VShop component
export default connect(null, mapDispatchToProps)(VShop);

import React from "react";
import Shop from "./Shop";
import VShop from "./Vshop";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard Component</h1>
      <Shop />
      <VShop />
    </div>
  );
}
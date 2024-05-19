import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import TabInfo from "../components/TabInfo";
const Display2 = () => {
 
  return (
    <div>
      <TabInfo heading="Create a new order" link="" />
      <div className="mt-10 mx-20 flex flex-col gap-4">
        <Link to="/display3">
          <Card
            heading="Configure your door from scratch"
            subheading="Residential, Commerical, Entry doors"
          ></Card>
        </Link>

        <Card
          heading="Parts / Openers"
          subheading="Order Parts and Openers"
        ></Card>

        <Card
          heading="Direct Item Entry"
          subheading="Order Parts / Openers using a Product ID"
        ></Card>

        <Card
          heading="Choose from favourites"
          subheading="Re-order door from your favourites "
        ></Card>
      </div>
    </div>
  );
};

export default Display2;

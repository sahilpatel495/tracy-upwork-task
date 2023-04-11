import React from "react";
import Card from "../../common/Card/Card";
import img1 from "../../assets/img/img1.png";

const ServicesDetailCard = () => {
  return (
    <Card
      image={img1}
      title="Japaneese lessons"
      dateOfService="Nov 7, 2020 · 11:30"
      placeOfService="Client`s place"
      priceOfService="Rp 350.000"
    />
  );
};

export default ServicesDetailCard;

import React from 'react';

const OrderItems = ({iteam}) => {
    return (
        <div className="shadow p-4">
        <p> <strong>Name </strong>:{iteam.name} </p>
        <p> <strong>Category </strong>:{iteam.category}</p>
        <p>  <strong>Price </strong>:{iteam.price}{" "}{iteam.currency}</p>
        <p>  <strong>Quantity </strong>:{iteam.quantity}</p>
  
        </div>
       
    );
};

export default OrderItems;
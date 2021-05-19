import React, { useEffect, useState } from "react";
import "./OrderSummary.css";

const OrderSummary = () => {
  const [Order, setOrder] = useState({});

  const { restaurant, items, user } = Order;

  useEffect(() => {
    fetch("http://localhost:5000/orderDetails")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);


//   "name": "Veg Cheese Burger",
//   "category": "Burgers",
//   "price": 150,
//   "currency": "INR",
//   "tax_pct": 2.5,
//   "quantity": 2
  console.log(Order);

  return (
    <>
      <div id="user-info">
        <div className="container p-3 pt-4">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body m-2">
                    <div>
                      <h4 className="text-primary">Restaurant Details:</h4>
                      <p>
                        <strong>Name </strong>:{restaurant?.name}
                      </p>
                      <p>
                        <strong>Address </strong>:{restaurant?.street},{" "}
                        {restaurant?.city}, {restaurant?.state}-
                        {restaurant?.zipcode}
                      </p>
                    </div>
                    <hr />
                    <div>
                      <h4 className="text-primary">Customer Details: </h4>
                      <p>
                        <strong>Name </strong>:{user?.name} ;{" "}
                        <strong>ID </strong> : {user?.id}
                      </p>
                      <p>
                        <strong>phone </strong>:{user?.phone}
                      </p>
                      <p>
                        <strong>Address </strong>:{user?.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body m-2">
                    <h4 className="text-primary">Order Items</h4>
                    <hr/>

                    {items?.map((x) => (
                      <>
                        <div className="shadow p-4">
                        <p> <strong>Name </strong>:{x.name} </p>
                        <p> <strong>Category </strong>:{x.category}</p>
                        <p>  <strong>Price </strong>:{x.price}{" "}{x.currency}</p>
                        <p>  <strong>Quantity </strong>:{x.quantity}</p>
                  
                        </div>
                       

                      
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body m-2">gg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;

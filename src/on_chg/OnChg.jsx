import React, { useState } from "react";

function OnChg() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p> <br />
        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity}</p> <br />
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="type here"
        />
        <p>Comment: {comment}</p> <br />
        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="visa">Visa</option>
          <option value="mastercard">mastercard</option>
        </select>
        <p>Payment: {payment}</p> <br />
        <label>
          <input
            type="radio"
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShippingChange}
          /> Pick Up
        </label>
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          /> Delivery
        </label>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
}

export default OnChg;

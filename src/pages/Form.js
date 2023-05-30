import React, { useState } from "react";
import KhaltiCheckout from "khalti-web";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handlePayment = () => {
    const config = {
      publicKey: "test_public_key_a3745fa85d9244d98d72d84658d81834",
      productIdentity: "1234567890",
      productName: "Test product",
      productUrl: "http://example.com/test-product",
      eventHandler: {
        onSuccess(payload) {
          // Handle the success event
          console.log(payload);
          // Generate and download PDF
          const pdf = new jsPDF();
          pdf.text(`Name: ${name}`, 10, 10);
          pdf.text(`Address: ${address}`, 10, 20);
          pdf.save("user-info.pdf");
        },
        onError(error) {
          // Handle the error event
          console.log(error);
        },
        onClose() {
          // Handle the close event
          console.log("Payment window closed.");
        },
      },
    };

    const checkout = new KhaltiCheckout(config);
    checkout.show({ amount: 1000 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Allow payment only if name and address are provided
    if (name && address) {
      handlePayment();
    } else {
      alert("Please enter your name and address.");
    }
  };

  return (
    <div>
      <h1>Khalti Payment Gateway</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

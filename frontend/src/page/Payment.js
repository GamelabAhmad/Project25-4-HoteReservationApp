import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const bookingData = location.state || {};
  const { name, email, checkInDate, checkOutDate, roomType } = bookingData;

  const [totalPrice, setTotalPrice] = useState(100000); // Example total price, adjust as needed
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!name || !email) {
      // If no booking data is found, redirect back to booking page or handle accordingly
      console.error("Booking data is missing");
    }
  }, [name, email]);

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-payment",
        {
          totalPrice,
          itemName: `Booking for ${roomType}`,
          customerName: name,
          customerEmail: email,
        }
      );
      const { token } = response.data;
      setToken(token);
      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log("success", result);
        },
        onPending: function (result) {
          console.log("pending", result);
        },
        onError: function (result) {
          console.log("error", result);
        },
        onClose: function () {
          console.log(
            "customer closed the popup without finishing the payment"
          );
        },
      });
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };

  useEffect(() => {
    if (name && email) {
      handlePayment();
    }
  }, [name, email]);

  return (
    <div>
      <h2>Halaman Pembayaran</h2>
      {token && (
        <div>
          <p>Token Transaksi: {token}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;

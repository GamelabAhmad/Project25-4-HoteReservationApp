// controllers/paymentController.js
const { v4: uuidv4 } = require("uuid");
const snap = require("../config/midtrans");

exports.createTransaction = async (req, res) => {
  const { totalPrice, itemName, customerName, customerEmail } = req.body;

  const transactionDetails = {
    order_id: uuidv4(),
    gross_amount: totalPrice,
  };

  const itemDetails = [
    {
      id: "item1",
      price: totalPrice,
      quantity: 1,
      name: itemName,
      brand: "Java Hotel",
    },
  ];

  const customerDetails = {
    first_name: customerName,
    email: customerEmail,
  };

  try {
    const transactionToken = await snap.createTransactionToken({
      transaction_details: transactionDetails,
      item_details: itemDetails,
      customer_details: customerDetails,
    });

    res.json({ token: transactionToken });
  } catch (err) {
    console.error("Error creating transaction:", err);
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

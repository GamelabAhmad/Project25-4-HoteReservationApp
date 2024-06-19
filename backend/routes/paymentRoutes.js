const express = require("express");
const router = express.Router();
const midtransClient = require("midtrans-client");

// Create Snap API instance
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-CjTO_Zm-uyEaJpVTweqghQcD",
});

router.post("/create-payment", async (req, res) => {
  const { totalPrice, itemName, customerName, customerEmail } = req.body;

  let parameter = {
    transaction_details: {
      order_id: "order-id-" + Math.round(new Date().getTime() / 1000),
      gross_amount: totalPrice,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: customerName,
      email: customerEmail,
    },
    item_details: [
      {
        id: "item01",
        price: totalPrice,
        quantity: 1,
        name: itemName,
      },
    ],
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    res.status(200).json({ token: transaction.token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

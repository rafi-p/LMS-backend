import transactionModel from "../models/transactionModel.js";

export const handlePaymennt = async (req, res) => {
  try {
    const body = req.body;

    const orderId = body.order_id;

    switch (body.transaction_status) {
      case "capture":
      case "settlement":
        await transactionModel.findByIdAndUpdate(orderId, {
          status: "success",
        });
        break;
      case "denied":
      case "cancel":
      case "expire":
      case "failure":
        await transactionModel.findByIdAndUpdate(orderId, {
          status: "failed",
        });

        break;
      default:
        break;
    }

    return res.json({
      message: "Handle payment success",
      data: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

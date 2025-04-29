import Product from "../models/Product";
import  Order from "../models/Order";

//Place Order COD : /api/order/cod
export const placeOrderCOD = async (req, res) => {
    try {
        const {userId, items, address } = req.body;
        if(!address || items.length === 0){
            return res.json({success:false, message:"invalid data"})
        }

        //Calculate amount using items
        let amount = await items.reduce(async (acc, item) => {
            const product =  await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)

        //Add Tax Charge (2%)
        amount +=Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        });

        return res.json({succes:"true", message:"Order Placed Succesfully"})
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}
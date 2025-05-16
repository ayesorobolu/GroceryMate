import User from "../models/User.js";

//Update user cartdata : /api/cart/update
export const updateCart = async (req, res) => {
    try {
        const userId = req.userId; // from auth middleware
        const { cartItems } = req.body;

        if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

        await User.findByIdAndUpdate(userId, { cartItems });

        res.json({ success: true, message: "Cart updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}
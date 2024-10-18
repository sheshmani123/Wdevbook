import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        let  cartData = userData.cartData;

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Remove item from user cart
const removeFromCart = async (req, res) => {
    try {
        let  userData = await userModel.findOne({ _id: req.body.userId });
        console.log(userData)
        let cartData = userData.cartData || {};
        console.log(cartData)

        if (cartData[req.body.itemId]  > 0) {
            cartData[req.body.itemId] -= 1;


           await userModel.findByIdAndUpdate(req.body.userId, { cartData });
            
            res.json({ success: true, message: "Removed from the cart" });
        } else {
            res.json({ success: false, message: "Item not found in the cart" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Fetch user cart data
const getCart = async (req, res) => {
    try {
        let  userData = await userModel.findById({ _id: req.body.userId });
        let cartData=await userData.cartData;
        console.log(cartData)
        res.json({success: true, cartData});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addToCart, removeFromCart, getCart };

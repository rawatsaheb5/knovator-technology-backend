

const placeOrder = async (req, res) => {
    try {
        const { firstName, lastName, address , order} = req.body;
        if (!firstName) {
            return res.status(400).json({message:"please provide first name"})
        }
        if (!lastName) {
            return res.status(400).json({message:"please provide last name"})
        }
        if (!address) {
            return res.status(400).json({message:"please provide address name"})
        }
        console.log(order)
        res.status(200).json({order, message:'order placed successfully'})
      
    } catch (err) {
      // If an error occurs, send an error response
      res.status(500).json({ message: err.message });
    }
}
  
module.exports = {
    placeOrder
}
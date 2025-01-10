const Lend = require("../models/Lend");

// Get all lends
exports.getLends = async (req, res) => {
  try {
    const lends = await Lend.find();
    console.log('Entered gettingLends')
    res.status(200).json(lends);
  } catch (error) {
    res.status(500).json({ message: "Error in fetching your lends", error });
    console.log('Error fetching Lends')
  }
};

exports.addLend = async (req, res) => {
  console.log('Entered add Lend')
    const {id , amount, interestRate, interestType, period, status, description } =
      req.body;
      console.log(`${id}, ${amount}, ${interestRate},${interestType}, ${period}`)
  
    // Server-side validation
    if (!amount || !interestRate || !interestType || !period) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      const lend = new Lend({
        amount,
        interestRate,
        interestType,
        period,
        status,
        description,
      });
      console.log('Entered saving lend')
      await lend.save();
      console.log('lend saved')
      res.status(201).json(lend);
    } catch (error) {
      res.status(500).json({ message: "Error adding lend", error });
      console.log("Error: ", error);
    }
  };
  

// Update a lend
exports.updateLend = async (req, res) => {
  const { id } = req.params;
  const { amount, interestRate, interestType, period, status, description } =
    req.body;

  try {
    const lend = await Lend.findByIdAndUpdate(
      id,
      { amount, interestRate, interestType, period, status, description },
      { new: true }
    );

    if (!lend) {
      return res.status(404).json({ message: "Lend not found" });
    }

    res.status(200).json(lend);
  } catch (error) {
    res.status(500).json({ message: "Error updating lend", error });
  }
};

// Delete a lend
exports.deleteLend = async (req, res) => {
  const { id } = req.params;

  try {
    const lend = await Lend.findByIdAndDelete(id);

    if (!lend) {
      return res.status(404).json({ message: "Lend not found" });
    }

    res.status(200).json({ message: "Lend deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting lend", error });
  }
};



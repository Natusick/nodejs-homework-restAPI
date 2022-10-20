const {Contact} = require("../../models/contacts");

const updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
const { Permission } = require("../models/permission");
const _ = require("lodash");
module.exports.getPermissions = () => {
    return async(req,res) => {
        const permissions = await Permission.find({});
        res.status(200).json({permissions});
    }
}
module.exports.signPermission = () => {
  return async (req, res, next) => {
    try {
      const newPermission = new Permission(
        _.pick(req.body, [
          "studentNames",
          "departureDate",
          "departureTime",
          "returnDate",
          "returnTime",
          "reason",
          "issuer",
        ])
      );
      console.log(newPermission);
      await newPermission.save();
      res
        .status(200)
        .json({ permission: newPermission, message: "Successfully Signed!" });
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .json({ message: "Something went wrong! Please try again!" });
    }
  };
};

module.exports.updatePermission = () => {
    return async(req,res,next) => {
        try {
            const newPermission = await Permission.findByIdAndUpdate(req.params.id,req.body);
            console.log(newPermission);
            await newPermission.save();
            res
              .status(200)
              .json({ permission: newPermission, message: "Successfully Updated!" });
          } catch (e) {
            console.log(e);
            res
              .status(500)
              .json({ message: "Something went wrong! Please try again!" });
          }
    }
}

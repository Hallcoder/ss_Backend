const { User } = require("../models/user")

module.exports.saveUser = () => {
    return async(req,res,next) => {
        try {
            const user = new User({token:req.body.token});
            res.status(200).json({user,message:'Successfully saved user'});
        } catch (error) {
            return res.status(500).json({message:'Something went wrong! Contact your developer'});
        }
    }
}

module.exports.checkUser = () => {
    return async(req,res,next) => {
        try {
            const user = User.findOne({token:req.body.token});
            res.status(200).json({user,message:'Successfully got user'});
        } catch (error) {
            return res.status(500).json({message:'Something went wrong! Contact your developer'});
        }
    }
}
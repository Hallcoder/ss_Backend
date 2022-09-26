const { User } = require("../models/user")

module.exports.saveUser = () => {
    return async(req,res) => {
        try {
            const user = new User({token:req.body.token});
            await user.save();
            res.status(200).json({user,message:'Successfully saved user'});
        } catch (error) {
            return res.status(500).json({message:'Something went wrong! Contact your developer'});
        }
    }
}

module.exports.checkUser = () => {
    return async(req,res) => {
        try {
            const user = await  User.findOne({token:req.params.token});
            console.log(user)
            if(!user)  return res.status(403).json({message:'Not authorized'});
            return res.status(200).json({user,message:'Successfully got user'});
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message:'Something went wrong! Contact your developer'});
        }
    }
}
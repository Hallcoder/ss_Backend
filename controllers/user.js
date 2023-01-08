const { User } = require("../models/user")

module.exports.saveUser = () => {
    return async(req,res) => {
        try {
            if(!req.body.token) return res.status(404).json({message:'Access Denied!'})
            const user = await User.findOne({token: req.body.token}).exec();
            if(user) return res.status(200).json({message:'Successfully got the user!',user})
            const newUser = new User({token:req.body.token});
            await newUser.save();
            res.status(200).json({newUser ,message:'Successfully saved user'});
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:'Something went wrong! Contact your developer'});
        }
    }
}

module.exports.checkUser = () => {
    return async(req,res) => {
        try {
            const user = await  User.findOne({token:req.params.token}).exec();
            console.log(user)
            if(!user)  return res.status(403).json({message:'Not authorized'});
            return res.status(200).json({user,message:'Successfully got user'});
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({message:'Something went wrong! Contact your developer'});
        }
    }
}
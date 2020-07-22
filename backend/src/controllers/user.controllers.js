const userCtrl = {};

userCtrl.getUsers =(req, res)=> res.json({message:'user get'});


userCtrl.createUser =(req, res)=> res.json({message:'user create'});


userCtrl.deleteUser =(req, res)=> res.json({message:'user delete'});

module.exports =userCtrl;
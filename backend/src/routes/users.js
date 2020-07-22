const {Router} = require('express');
const router = Router();
const {getUsers, createUser, deleteUser } = require ('../controllers/user.controllers')

//route va ejecutar se va a  manera que responda el mensaje
router.route('/')

  .get(getUsers)
 
  .post(createUser)

 router.route('/:id')
  
  .delete(deleteUser)
module.exports = router;

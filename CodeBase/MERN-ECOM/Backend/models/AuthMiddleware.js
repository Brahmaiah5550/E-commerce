
// import jwt from 'jsonwebtoken'


// export let authMiddleware = (req,res,next)=>{
//     const token = req.headers['authorization']//local storage nundi ekkadiki vastadi
// try {
//     if(token){
//         var decode = jwt.verify(token, 'hello')//user id ni decode chestunnam malli so mana token and secret key kavali
//         req.user = decode
//         next()
//     }else{
//         console.log('no token')
//     }
    
// } catch (error) {
    
// }

// }




  


  
import jwt from 'jsonwebtoken'

export var authMiddleware = (req, res, next) => {
  // console.log(token) 

    var token = req.header('x-token');
    console.log(token)
  if (!token) {
      return res.status(401).send('no token') 
  } 
  
  var decode = jwt.verify(JSON.parse(token) , 'hello')
  console.log(decode)
  req.userId = decode.userId
  next()

}
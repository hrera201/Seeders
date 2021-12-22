const db=require('../models');
const {ValidationError}=require('sequelize');
// const Logger=require('../Logger/logger');

//  const logger=new Logger();
// logger.on('customer_updated',()=>{
//     console.log('update event triggered');
// })

module.exports.create=function(req,res,next){
    db.Customer.create().then((result)=>{
        res.status(201).json({message:'Customer Created Successfully.'})
    }).catch(e=>{
        if(e instanceof ValidationError){
            res.status(400).json({'validation Error':e.errors[0].message})
        }
        else{
            res.status(400).json({error:e})
        }
    })
}
module.exports.update=function(req,res,next){
    db.Customer.update({
        name:'hrera'
    },{where:{name:'Hrera'}}).then(result=>{
        logger.customerUpdateEmit();
        res.status(200).json({message:'Customer Updated Succesfully'})
    })
}

module.exports.read=function(req,res,next){
    db.Customer.findAll({
       
    }).then((result)=>{
        res.status(200).json({data:result})
    })
}

module.exports.delete=function(req,res,next){
    db.Customer.destroy({
        where:{id:{}}
    }).then(()=>{
        res.status(200).json({message:'row Deleted'})
    })
}


const Joi = require('joi');


const createSchema=()=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        age: Joi.number().required().integer(),
        content: Joi.string().required(),
        title: Joi.string().required(),
        
      });
      return schema
}
const updateAndDeleteSchema=()=>{
  const schema = Joi.object({
      name: Joi.string(),
      email: Joi.string().email().required(),
      age: Joi.number().integer(),
      content: Joi.string(),
      title: Joi.string(),
      
    });
    return schema
}
module.exports={createSchema,updateAndDeleteSchema}

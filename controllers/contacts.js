const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


// async function responseHandler(result, res){
//   console.log("--Response handler--");
//   res.setHeader('Content-Type', 'application/json');
//   const resultArray = await result.toArray();
//   res.status(200).json( resultArray[0] );
// }

async function getAll (req, res, next){

  const userId = new ObjectId(req.params.id);
  const dbQuery = await mongodb.getDb().db().collection('Contacts').find();

  console.log("--Getting all contacts--")
  res.setHeader('Content-Type', 'application/json');
  const resultArray = await dbQuery.toArray();
  res.status(200).json(resultArray);

}

async function getSingle (req, res, next){

  const userId = new ObjectId(req.params.id);
  const dbQuery = await mongodb.getDb().db().collection('Contacts').find({ _id: userId });

  
  //console.log( await result.toArray() );

  console.log("--Getting one contact--")
  res.setHeader('Content-Type', 'application/json');
  const resultArray = await dbQuery.toArray();
  res.status(200).json(resultArray[0]);



  // await responseHandler(dbQuery, res);

}

module.exports = { getAll, getSingle };


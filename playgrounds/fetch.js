const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log("Some error Occured",err);
  }

  //then receives promise  it has two call back fun either success or error ;

  db.collection('Todos').find({_id:new ObjectID('5c42138a7867aecd4c4154d7')}).toArray().then((docs)=>
{
  console.log("Todos ");
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>
{
  if(err)
  {
    return console.log("Some error Occured",err);
  }
});
});

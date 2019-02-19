const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Error connecting to mongo db");
  }
  console.log("Connected to mongo db");
  db.collection('Todos').insertOne({
    name:'Abhishek',
    todo:'Finish node js'
  },(err,result)=>{
    if(err)
    {
      return console.log('Error Occured Inserting to database',err);
    }

    return console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.close();
});

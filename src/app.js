

const mongodb = require('mongodb')
 
const mongoClient = mongodb.MongoClient

const connU = 'mongodb://127.0.0.1:27017'

const dbname = "proj-1"

mongoClient.connect(connU , (error , res1)=>{
    if(error){
        return console.log('error has occured')
    }
    console.log('all perf')
    const db = res1.db(dbname)

    db.collection('users').insertOne({
        name:'Hossam',
        age:20
    },(error , data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
    })

///////////////////////////////////////////////


            db.collection('users').insertOne({
                name:'Ahmed',
                age:23
            },(error , data)=>{
                if(error){
                    console.log('unable to insert data')
                }
                console.log(data.insertedId)
            })
/////////////////////////////////////////////////////

            db.collection('users').insertMany(
            [  {
                    name:'mohamed',
                    age:27
                },
                {
                    name:'yousef',
                    age:27
                },
                {
                    name:'rana',
                    age:27
                },
                {
                    name:'ali',
                    age:27
                },
                {
                    name:'amira',
                    age:27
                },
                {
                    name:'khaled',
                    age:25
                },
                {
                    name:'eid',
                    age:26
                },
                {
                    name:'karim',
                    age:22
                },
                {
                    name:'nady',
                    age:29
                },
                {
                    name:'esraa',
                    age:30
                }
            ],(error , data)=>{
                if(error){
                    console.log('unable to insert data')
                }
                console.log(data.insertedCount)
            }
            )

            ////////////////////////////////////////////////////////

            db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
                if(error){
                    return console.log('error has occured')
                }
                console.log(users)
            })

            /////////////////////////////
            db.collection("users").updateOne({_id:mongodb.ObjectId("6431c0297f5cc2f62038963e")} , {
                $set: {name : "gamal"},
                $inc: {age : 4}
            })
            .catch((error)=> {console.log(error)})

            /////////////
            db.collection("users").updateOne({_id:mongodb.ObjectId("6431c0297f5cc2f62038963f")} , {
                $set: {name : "nada"},
                $inc: {age : 4}
            })
            .catch((error)=> {console.log(error)})
            ///////////////////

            db.collection("users").updateOne({_id:mongodb.ObjectId("6431c0297f5cc2f620389640")} , {
                $set: {name : "abdallah"},
                $inc: {age : 4}
            })
            .catch((error)=> {console.log(error)})
///////////////////////////////
            db.collection("users").updateOne({_id:mongodb.ObjectId("6431c0297f5cc2f620389641")} , {
                $set: {name : "moustafa"},
                $inc: {age : 4}
            })
            .catch((error)=> {console.log(error)})

              /////////////////

              db.collection("users").updateMany({},{
                $inc : {age :10}
              }).catch((error)=> console.log(error))

              ////////////////////

              db.collection("users").deleteMany({age:41})
              .then((data1)=>{console.log(data1.deletedCount)})
              .catch((error)=>{console.log(error)})
            
})
var express = require('express');
var router = express.Router();


const env = require('env2')('.env');
const uuidv4 = require('uuid/v4');

var Client = require('mariasql');
var c = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    db: process.env.DB_NAME,
    charset: process.env.DB_CHARSET
});


   router.get('/random', function(req, res,next) {
    try{
     var index = req.query.index;


     var count_statement = "select count(*) as count from `"+process.env.TABLE_NAME+"`";

     c.query(count_statement, function (err, result) {
        console.log(result);
        if (err) throw err;
 
        if(index<0){
          index = Math.floor(Math.random() * (result[0].count));
        }


        var statement = "select * from `"+process.env.TABLE_NAME+"` limit "+index+",1";
        c.query(statement, function (err, result) {
          console.log(err);
          if (err) throw err;
            
            res.json(result[0]);
        });
        //c.end();
     });
    } catch (error) {
		res.status(400).send(error);
    }

   });
   
   router.get('/:uid', function(req, res,next) {
    try{
        var prep = c.prepare('SELECT * FROM `'+process.env.TABLE_NAME+'` WHERE id = :uid');
        var uid = req.params.uid;
        console.log(req.params.uid);
        c.query(prep({ uid: req.params.uid }), function(err, rows) {
          if (err)
              throw err;

          res.json(rows[0]);
        });
        //c.end();
    } catch (error) {
		res.status(400).send(error);
    }
   });

   router.post('/', function (req, res) {
     try {
    	  const payload = req.body.model;
          const hostURL = 'https://' + req.hostname;
	  console.log("payload length:", payload.length);
	  if (!payload.length) {
	    throw "Invalid Request Data";
	  }
	  let keys;
	  let response = [];
	  let stringValues = [];
	  for (let i = 0; i < payload.length; i++) {
            payload[i]["id"] = uuidv4();
            if (!keys) {
              keys = Object.keys(payload[i]);
	    }
	    let values = Object.values(payload[i]);
	    values = values.map((val) => {
	      if(typeof val !== 'string'){
  	        return JSON.stringify(val);
  	      }
	      return val;
	    });
	    stringValues.push("(" + values.map(date => `'${date}'`).join(',') + ")");
	    response.push(hostURL + "/" + payload[i]["id"]);
	  }
	  const query = "INSERT INTO `" + process.env.TABLE_NAME + "` (" + keys.join() + ") VALUES " + stringValues.join(',');
	  c.query(query, function (err) {
			  if (err) throw err;
			  res.status(200).send(response);
			  });
	  //c.end();
    } catch (error) {
	res.status(400).send(error);
    }
   });
   

module.exports = router;

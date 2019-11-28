var express = require("express");
var mysql = require("mysql");
var config=require("config");
var empRouter=express();
var connection = mysql.createConnection({
    host:config.get("host"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password")
})
connection.connect();
empRouter.get("/",(request,response)=>{
    var queryText=`select * from employee`;
    console.log(queryText);
    connection.query(queryText,(err,result)=>{
        connection.end();
        if(err == null)
        {
            response.send(result);
        }
        else
        {
            response.send(err);
        }
    })

})
module.exports=empRouter;
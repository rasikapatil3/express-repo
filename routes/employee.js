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
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    })

})
empRouter.get("/:id",(request,response)=>{
    var id=request.params.id;
    var queryText=`select * from employee where id=${id}`;
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    })

})
module.exports=empRouter;
var express=require("express");
var empRouter=require("./routes/employee");
var router=express();
router.use(express.json());

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.use("/employee",empRouter);

router.listen(9898,"0.0.0.0",()=>{
    console.log("server started on port 9898");
})
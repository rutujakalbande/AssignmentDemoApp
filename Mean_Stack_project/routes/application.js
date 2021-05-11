var express = require('express');

var router = express.Router();

const User  = require("../models/user");
const Student  = require("../models/studentData");

const DemoData  = require("../models/demo");


const EnqData  = require("../models/enquiry");

var bcrypt = require('bcryptjs');

const jwt = require("jsonwebtoken");

const multer = require("multer");


const checkAuth = require("../validate/check-auth");

router.get('/user',(req, res, next) => {
	
	  res.send("Hello Login - User!");
	  
	  next();
	
});

router.post("/addDemo",(req,res,next) => {

const demoData  = require("../models/demo");
const dData = new DemoData ({
  demoName: req.body.demoName,

  demoDate: req.body.demoDate,
  
  demoLocation: req.body.demoLocation,
  
  demoMode: req.body.demoMode,

  demoFees: req.body.demoFees,
  
  demoFaculty: req.body.demoFaculty,
});
dData.save().
  then (result => 
  {
	    //console.log(' Demo method  --- Start 3');
		    res.status(201).json({
									message: "Demo added successfully",
									result : result
							});
  })
  .catch( err => { 
  
	////console.log('Error occured.. '+ err);
	
	res.status(500).json({ message: err.toString()});
  
  });	

})


const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(' mmm method .. 1'  );
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = '';
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  }
});

var upload = multer({storage: storage});


router.get("/getStudentSignupImage", (req, res, next) => {
	////console.log('****getUsers --- Start 1');
  Student.find().then(documents => {
	  ////console.log('getUsers --- Start 2');
    res.json(
      documents
    );
	////console.log('****8getUsers --- Start 3');
  });
});
  


//Sign up Method
router.post("/signupImage" , upload.single('image'),(req,res,next) => {
		 
      console.log(' signupImage method .. 1', req.body.loginName , +" -- "+ req.file.filename );

      const url = req.protocol + "://" + req.get("host");
      
      const imagePath= url + "/images/" + req.file.filename;

      console.log(' imagePath  :: ' ,imagePath );
	
	bcrypt.hash(req.body.password, 10).
	then( 
	hash =>
	{
		////console.log(' signup method hash : '+ hash);
		
		const stData = new Student({
			userName: req.body.userName,
			loginName: req.body.loginName,
			password: hash,
			email: req.body.email,
			userType: req.body.userType,
			contactNumber: req.body.contactNumber,
			address: req.body.address,
      image : imagePath
   
  });
  ////console.log(' signup method  occured.. 2');
  stData.save().
  then (result => 
  {
	    ////console.log(' signup method  --- Start 3');
		res.status(201).json({
									message: "User added successfully",
									result : result
							});
  })
  .catch( err => { 
  
	////console.log('Error occured.. '+ err);
	
	res.status(500).json({ message: err.toString()});
  
  });	
});
	
});
//Sign up Method
router.post("/signup" , (req,res,next) => {
	////console.log(' signup method .. 1');
	
	bcrypt.hash(req.body.password, 10).
	then( 
	hash =>
	{
		////console.log(' signup method hash : '+ hash);
		
		const userData = new User({
			userName: req.body.userName,
			loginName: req.body.loginName,
			password: hash,
			email: req.body.email,
			userType: req.body.userType,
			contactNumber: req.body.contactNumber,
			address: req.body.address 
   
  });
  ////console.log(' signup method  occured.. 2');
  userData.save().
  then (result => 
  {
	    ////console.log(' signup method  --- Start 3');
		res.status(201).json({
									message: "User added successfully",
									result : result
							});
  })
  .catch( err => { 
  
	////console.log('Error occured.. '+ err);
	
	res.status(500).json({ message: err.toString()});
  
  });	
});
	
});
 
//Login method 
 
router.post("/loginOne", (req, res) => {
////console.log('**** loginOne *** start ');

let fetchedUser;
User.findOne({ userName : req.body.userName })
.then(user => {
if (!user) {
return res.status(401).json({
message: "Invalid username or passowrd !"
});
}
fetchedUser = user;
return bcrypt.compare(req.body.password, user.password);
})
.then(result => {
if (!result) {
return res.status(401).json({
message: "Invalid username or passowrd !"
});
}
const token = jwt.sign(
{ email: fetchedUser.userName  },
"secret_this_should_be_longer",
{ expiresIn: "5m" }
);
return  res.status(200).json({
token: token,
user : fetchedUser,
expiresIn : 3600
/*,
"expiresIn": 3600  */

});
})
.catch(err => {
res.status(401).json({
message: "Invalid username or passowrd !"
});
});
});

//Retrive all users

router.get("/getUsers", (req, res, next) => {
	////console.log('****getUsers --- Start 1');
  User.find().then(documents => {
	  ////console.log('getUsers --- Start 2');
    res.json(
      documents
    );
	////console.log('****8getUsers --- Start 3');
  });
});
  
//Retrive all Demo

router.get("/getDemo", (req, res, next) => {
	////console.log('****getUsers --- Start 1');
  DemoData.find().then(documents => {
	  ////console.log('getUsers --- Start 2');
    res.json(
      documents
    );
	////console.log('****8getUsers --- Start 3');
  });
});


//Update Demo Method
router.put("/updateDemo/:id", (req,res,next) => {  
  let fetchedDemo;   
  //console.log(' update user 1 ' + req.body._id);
  
    
  const demoDataNew = new DemoData ({
    _id : req.body._id,
    demoName: req.body.demoName,
  
    demoDate: req.body.demoDate,
    
    demoLocation: req.body.demoLocation,
    
    demoMode: req.body.demoMode,
  
    demoFees: req.body.demoFees,
    
    demoFaculty: req.body.demoFaculty,
  });
  //console.log(' update user  occured.. 2 =  ' + demoDataNew);
  DemoData.updateOne({_id :  req.params.id }, demoDataNew).
  then (result => 
  {
    
    //console.log('result : ' +result.toString());

    if(result.nModified > 0){

      DemoData.findOne({ _id : req.body._id })
      .then(user => {
        fetchedDemo = user;
      });
      
      //console.log('update user  --- Start 3 == > '+fetchedDemo);
      res.status(201).json({
                    message: "User updated successfully",
                    result : result , 
                    user : fetchedDemo
                });

    }
    else{
      //console.log('Post --- Start 4');
      res.status(400).json({
                    message: "User updated failed",
                    result : result
                });

    }
  })
  .catch( err => { 
  
  //console.log('Error occured.. '+ err);
  
  res.status(500).json({ message : err.toString()});
  
  }); 
});



/// to Delete Demo

// using this method to delete the user
  
router.delete("/deleteDemo/:id", (req,res,next) => {     
  //console.log('deleteDemo .... delete 1 ' + req.params.id);
   
 
  DemoData.deleteOne({_id :  req.params.id }).
  then (result => 
  {
    
    //console.log('result : ' +result.toString());
    
      //console.log('delete --- Start 3');
      res.status(201).json({
                    message: "User deleted successfully",
                    result : result
                });

     
  })
  .catch( err => { 
  
  //console.log('Delete Error occured.. '+ err);
  
  res.status(500).json({message: err.toString()});
  
  }); 
});
  
  
  
  // using this method to delete the user
  
  router.delete("/:id", (req,res,next) => {     
    //console.log(' delete 1 ' + req.params.id);
      
    const user = new User({
      userName: req.body.userName,
      loginName: req.body.loginName,
      password: hash,
      email: req.body.email,
      userType: req.body.userType,
      contactNumber: req.body.contactNumber,
      address: req.body.address 
   
  });
    //console.log(' delete occured.. 2 =  ' + user);
    User.deleteOne({_id :  req.params.id }).
    then (result => 
    {
      
      //console.log('result : ' +result.toString());
      if(result.nModified > 0){
        
        //console.log('delete --- Start 3');
        res.status(201).json({
                      message: "User deleted successfully",
                      result : result
                  });
  
      }
      else{
        //console.log('Post --- Start 4');
        res.status(400).json({
                      message: "User delete failed",
                      result : result
                  });
  
      }
    })
    .catch( err => { 
    
    //console.log('Delete Error occured.. '+ err);
    
    res.status(500).json({message: err.toString()});
    
    }); 
  });
  
  
  
 //Update User Method
router.put("/:id", (req,res,next) => {  
  let fetchedUser;   
  //console.log(' update user 1 ' + req.body._id);
  
    
    const user = new User({
      _id : req.body._id,
      userName: req.body.userName,
      loginName: req.body.loginName,
      password: req.body.password,
      email: req.body.email,
      userType: req.body.userType,
      contactNumber: req.body.contactNumber,
      address: req.body.address 
   
  });
  //console.log(' update user  occured.. 2 =  ' + user);
  User.updateOne({_id :  req.params.id }, user).
  then (result => 
  {
    
    //console.log('result : ' +result.toString());

    if(result.nModified > 0){

      User.findOne({ _id : req.body._id })
      .then(user => {
        fetchedUser = user;
      });
      
      //console.log('update user  --- Start 3');
      res.status(201).json({
                    message: "User updated successfully",
                    result : result , 
                    user : fetchedUser
                });

    }
    else{
      //console.log('Post --- Start 4');
      res.status(400).json({
                    message: "User updated failed",
                    result : result
                });

    }
  })
  .catch( err => { 
  
  //console.log('Error occured.. '+ err);
  
  res.status(500).json({ message : err.toString()});
  
  }); 
});





///Enquiry ////


router.post("/addEnquiry",(req,res,next) => {
 

  const demoData  = require("../models/enquiry");
  const eData = new EnqData ({
    firstName: req.body.firstName,
  
    lastName: req.body.lastName,
    
    cource: req.body.cource,
    
    location: req.body.location,
  
    emailId: req.body.emailId,
    
    mobileNumber: req.body.mobileNumber,

    contactedByTeam: false,
    
    commentsByCandidate: req.body.commentsByCandidate,
  });
  eData.save().
    then (result => 
    {
        //console.log(' Enquiry method  --- Start 3');
          res.status(201).json({
                    message: "Enquiry added successfully",
                    result : result
                });
    })
    .catch( err => { 
    
    //console.log('Error occured.. '+ err);
    
    res.status(500).json({ message: err.toString()});
    
    });	
  
  })
  
  

  
router.get("/getEnquiry", (req, res, next) => {
 
  EnqData.find().then(documents => {
	 
    res.json(
      documents
    );
 
  });
});





router.put("/updateEnquiry/:id", (req,res,next) => {  
     
  //console.log(' updateEnquiry  --- 1 ' + req.body._id);
  

  const enqDataNew = new EnqData ({
    _id : req.body._id,

    firstName: req.body.firstName,
  
    lastName: req.body.lastName,
    
    cource: req.body.cource,
    
    location: req.body.location,
  
    emailId: req.body.emailId,
    
    mobileNumber: req.body.mobileNumber,

    contactedByTeam: true,
    
    commentsByCandidate: req.body.commentsByCandidate,
  });
     
  //console.log(' update user  occured.. 2 =  ' + enqDataNew);
  EnqData.updateOne({_id :  req.params.id }, enqDataNew).
  then (result => 
  {
    
    //console.log('result : ' +result.toString());

    if(result.nModified > 0){
 
      
      res.status(201).json({
                    message: "User updated successfully" ,
                   result :result
                }); 
    }
    else{
      //console.log('Post --- Start 4');
      res.status(400).json({
                    message: "User updated failed" ,
                    result :result
                    
                });

    }
  })
  .catch( err => { 
  
  //console.log('Error occured.. '+ err);
  
  res.status(500).json({ message : err.toString()});
  
  }); 
});


module.exports = router;
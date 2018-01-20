/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req, res){
        return res.view('login');
         //return res.ok('hello');
    },

    handle_login : function(req, res){
        
        var form = req.body;
        // waterline,  query builder sails
        Users.findOne({
            username: form.username,
            password: form.password,
        }).exec(function(error, responses){ // callback
            
            if(error){
                return res.json(error);
            }
            if(typeof responses == 'undefined'){
                return res.json('username atau password mu salah bro');
            }
            else{
               // res.redirect( 'dashboard/landingpage');	
               return res.ok('hello');
            }

            //
        });
        return res.ok('hello');
    },

    

 

    

    /**
     * 
     * create: function (req, res) {          
 +        if(req.method=="POST"&&req.param("Person",null)!=null){
 +            Person.attributes=req.param("Person",null);	 
 +            Person.create(req.param("Person")).exec(function(err,model){	      
 +                // Error handling       
 +                if (err)          {                  
 +                    //  return console.log(err);           
 +                    res.send("Error");            
 +                    // The User was created successfully!          
 +                }       
 +                else{                       
 +                    res.redirect( 'person/view/'+model.id);		         
 +                }	     	         
 +            });	          
 +        }
 +        else{	        
 +            res.render( 'person/create');   
 +        }
 +    },
 +
 +    update: function (req, res) {
 +        var id=req.param("id",null);
 +        Person.findOne(id).exec(function(err, model) {
 +            if(req.method=="POST"&&req.param("Person",null)!=null){
 +                var p=req.param("Person",null);
 +                model.name=p.name;
 +		        model.age=p.age;
 +		        model.save(function(err){
 +                    if (err){                
 +                        res.send("Error");                     
 +                    }
 +                    else {                           
 +                        res.redirect( 'person/view/'+model.id);                             
 +                    }		      		      
 +                });            
 +            }
 +            else{		              
 +                res.render( 'person/update',{'model':model});      
 +            }	       
 +        });       
 +    },
 +
 +   delete: function (req, res) {
 +       var id=req.param("id",null);
 +       Person.findOne(id).exec(function(err, user) {
 +            user.destroy(function(err) {
 +                res.redirect( 'person/index/');
 +            });
 +        });  
 +    },
 +
 +   view: function (req, res) {
 +       var id=req.param("id",null);
 +       Person.findOne(id).exec(function(err,model){
 +            res.render( 'person/view',{'model':model}); 	
 +        });
 +    },
 + 
 +   index: function (req, res){
 +       Person.find().exec(function(err, persons) {
 +           res.render( 'person/index',{'persons':persons});
 +           return;
 +        });
 +    
 +       
 +  },
     * 
     */
};


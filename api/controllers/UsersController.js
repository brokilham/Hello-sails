/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	handle_create_user : function(req, res){
       // return nya perlu di perbaiki
        var form = req.body;
        
        Users.create({
            username: form.username,
            password: form.password,
        }).exec(function(error, responses){ // callback
            if(error){
                return res.json(error);
            }
            if(typeof responses == 'undefined'){
                return res.json('username atau password mu salah bro');
            }
        })
       // return res.json(req.body) //<- bisa juga langsung    
       // return res.json(form) 
    }
};


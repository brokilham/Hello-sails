/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index : function(req, res){
        // penjelasan  view dari content, dengan menggunakan layout.ejs

       Main_menu.find().exec(function(error, responses){
               
            if(error){           
                return res.ok('error bro');    
            }
            
            //return res.json(responses);

            return res.view('dashboard/content',{
                layout:'dashboard/layout',
                Main_menu : Main_menu
               
            })
           
        }); 
        
       
    }

     // konsep pemanggilan menu
    /*Route::get('/',function(){
		$categories = tbl_pages::with('children')->where('parent_id','=',0)->get();
		return view('menu',['categories'=>$categories]);
    });*/

    /*landingpage : function(req, res){

        var form = req.body;
        // waterline,  query builder sails
        Users.create({
            username: form.username,
            password: form.password,
        }).exec(function(error, responses){ // callback
            
        });
        
       return res.json(responses); //<- bisa juga langsung
    },*/

   
};


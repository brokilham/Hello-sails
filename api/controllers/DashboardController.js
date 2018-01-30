/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index : function(req, res){
        
        Main_menu.find().populate('submenu').exec(function(error, responses){
            
            if(error){           
                return res.ok('error bro');    
            }
            
            //return res.json(responses);
            return res.view('dashboard/content',{
                layout:'dashboard/layout',
                title : 'Brokilham',
                MenuList : responses
                
            })
           
        });

        /*Main_menu.find().exec(function(error, responses){
               
            if(error){           
                return res.ok('error bro');    
            }
            
            //return res.json(responses);

            return res.view('dashboard/content',{
                layout:'dashboard/layout',
                title : 'Brokilham',
                MenuList : responses
               
            })
           
        }); */

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


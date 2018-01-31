/**
 * SettingController
 *
 * @description :: Server-side logic for managing settings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req, res){
       // return res.ok('this is sparta');  
       
       Main_menu.find().populate('submenu').exec(function(error, responses){
            
        if(error){           
            return res.ok('error bro');    
        }
        
        //return res.json(responses);
        return res.view('setting/view_menu',{
            layout:'dashboard/layout',
            title : 'Brokilham',
            MenuList : responses
            
        })
       
    });
    }
};


/**
 * Main_menu.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes: { 
    Id_mainmenu :{
      type : 'string',	
      primaryKey: true
    },  
    Name : {      
      type : 'string'		    
    },
    submenu: { // submenu ini, nama array tampungan
      collection: 'Sub_menu', // nama table sub_menu
      via: 'Id_mainmenu'
    }   
  }
};


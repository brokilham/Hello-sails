/**
 * Sub_menu.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {    
      Id_submenu :{
        type : 'string',	
        primaryKey: true
      },  
      Name_submenu : {      
        type : 'string'		    
      },
      Controller_submenu : {      
        type : 'string'		    
      },

      // Id main menu adalah, primary key pada tabel Main_Menu.js
      // nanti otomatis kepanggail 
      Id_mainmenu: {
        model: 'Main_Menu'   
      }
  }
};


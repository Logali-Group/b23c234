sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
],function(Controller, JSONModel){

    "use strict";

    return Controller.extend("b23c234.controller.App",{

        onInit: function () {
            this._loadModel(); 
        },

        _loadModel: function () {
            let oData = {
                "Name":"Jorge",
                "Surname":"Briceño",
                "FullName": "Jorge Briceño",
                "Age":30,
                "Nationality":"VEN",
                "Details":[
                  {
                    "Course":"Course #1",
                    "Location":"COL",
                    "Details":[
                      {
                        "Property":"Value #1"
                      }
                    ]
                  },
                  {
                    "Course":"Course #2",
                    "Location":"VEN",
                    "Details":[
                      
                    ]
                  }
                ]            
            };
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "view");
        },

        onOpenDialogHeader: function () {
          this.getOwnerComponent().openHelloDialog();
        }
        // onBeforeRendering: function () {

        // },

        // onAfterRendering: function () {

        // },

        // onExit: function () {

        // },

    });

});
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/m/MessageBox",
   "sap/ui/model/json/JSONModel"
],function(Controller, MessageToast, MessageBox, JSONModel){

    "use strict";

    return Controller.extend("b23c234.controller.App",{

        onInit: function () {
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            const oButton = this.byId("button");
                oButton.setText(oResourceBundle.getText("hello2"));
            this._loadModel();
        },

        _loadModel: function () {
            let oData = {
                "Name":"Jorge",
                "Surname":"Briceño",
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

        // onBeforeRendering: function () {

        // },

        // onAfterRendering: function () {

        // },

        // onExit: function () {

        // },

        onShowMessage: function () {
            // MessageToast.show("Hello!",{
            //     duration: 5000
            // });
            MessageBox.confirm("Esta seguro de que desea continuar?",{
                actions:[
                    sap.m.MessageBox.Action.OK,
                    sap.m.MessageBox.Action.CANCEL
                ],
                emphasizedAction: sap.m.MessageBox.Action.OK,
                onClose: function (sAction) {
                    if (sAction === sap.m.MessageBox.Action.OK) {
                        MessageToast.show(sAction);
                    } else {
                        MessageToast.show(sAction);
                    }
                }
            });
        }

    });

});
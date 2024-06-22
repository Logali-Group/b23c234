sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment"
],function (Controller, MessageToast, MessageBox, Fragment) {
    "use strict";

    return Controller.extend("b23c234.controller.HelloPanel",{

        onInit: function () {
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            const oButton = this.byId("button");
                oButton.setText(oResourceBundle.getText("hello2"));
        },

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
        },

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }

    });
});
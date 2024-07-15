sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
],function (Controller, UIComponent, History) {
    "use strict";

    return Controller.extend("b23c234.controller.Details",{

        onInit: function () {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteDetails").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            this.byId("rating").reset();
            console.log(oEvent);
            let oArguments = oEvent.getParameter("arguments"),
                sPath = oArguments.path,
                iIndex = 1;
            
            this.getView().bindElement({
                //path: "/Employees("+iIndex+")",
                path: window.decodeURIComponent(sPath),
                model: 'northwind'
            });
        },

        onNavToNack: function () {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteApp");
            }
        },

        onRatingChange: function (oEvent) {
            const fValue = oEvent.getParameter("value");
            const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

            sap.m.MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
        }

    });
});
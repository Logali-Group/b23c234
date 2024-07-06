sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],function (Controller, JSONModel, formatter, Filter, FilterOperator) {

    "use strict";

    return Controller.extend("b23c234.controller.InvoicesList", {

        formatterController: formatter,

        onInit: function () {
            this._loadModel();
        },

        _loadModel: function () {
            let oData = {
                USD: "USD",
                EUR: "EUR",
                COP: "COP"
            };
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "currency");
        },

        onFilterInvoices: function (oEvent) {
            // console.log(oEvent);
            // console.log(oEvent.getParameter("id"));
            // console.log(oEvent.getParameter("newValue"));
            // console.log(oEvent.getParameters().id);
            // console.log(oEvent.getParameters().newValue);
            // console.log("****************************************");
            // console.log(oEvent.getSource());
            // console.log(this.getView().byId("searchField"));
            // console.log(this.byId("searchField"));

            let sValue = oEvent.getParameters().newValue;
            let aFilters = [];

            if (sValue) {
                aFilters.push(
                    new Filter({
                        filters:[
                            new Filter("ProductName", FilterOperator.Contains,sValue),
                            new Filter("ShipperName", FilterOperator.Contains, sValue)
                        ],
                        and: false
                    })
                );
                
                const oList = this.byId("invoiceList");
                let oBinding = oList.getBinding("items");
                oBinding.filter(aFilters);
            }
        }

    });
});
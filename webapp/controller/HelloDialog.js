sap.ui.define([
	"sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function( ManagedObject, Fragment) {
	"use strict";

	return ManagedObject.extend("b23c234.controller.HelloDialog", {


        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {

            let oView = this._oView,
                $this = this;

            let oFragmentController = {
                onCancel: function () {
                    $this._pDialog.then(function (oDialog) {
                        oDialog.close();
                    });
                }
            };

            if (!this._pDialog) {
                this._pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "b23c234.fragment.HelloDialo",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialog.then(function (oDialog) {
                oDialog.open();
            });
        }

	});
});
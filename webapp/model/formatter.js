sap.ui.define([

],function () {

    let oFormatter = {
        invoiceStatus: function (sStatus) {
            
            //Primer Paso = Acceder al modelo i18n --> this.getView().getModel()
            //Segundo paso =Identificar el nombre del modelo (i18n) --> this.getView().getModel("i18n")
            //Tercer paso = Colocar el metodo getResourceBundle --> this.getView().getModel("i18n").getResourceBundle()
            //Cuarto paso = Llamar con el metodo getText() un texto en especifico  --> this.getView().getModel("i18n").getResourceBundle().getText("Name")

            let oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch(sStatus) {
                case 'A': return oResourceBundle.getText("invoiceStatusA");
                case 'B': return oResourceBundle.getText("invoiceStatusB");
                case 'C': return oResourceBundle.getText("invoiceStatusC");
                default: return sStatus;
            }
        }
    };

    return oFormatter;

});
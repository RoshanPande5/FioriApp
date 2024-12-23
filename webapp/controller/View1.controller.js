sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("fioriapp.controller.View1", {
        onInit() {
        },
        onPress : function () {
            MessageToast.show("Button Clicked");
        }
    });
});
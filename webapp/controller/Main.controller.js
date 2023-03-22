sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("P2175_P001.controller.Main", {
		onpress: function() {

			let _view = this.getView();
			let _model = _view.getModel();
			let _data = _model.oData;

			let items = _data.datas.push({
				id: this.getView().getModel().getProperty("/myid"),
				ad: this.getView().getModel().getProperty("/myad"),
				soyad: this.getView().getModel().getProperty("/mysoyad"),
				email: this.getView().getModel().getProperty("/myemail")
			});

			//console.log(items)

			this.getView().getModel().refresh(true);
		},

		onInit: function() {

			let screenValue = {
				datas: []
			};

			let myJsonModel = new JSONModel();
			myJsonModel.setData(screenValue);

			this.getView().setModel(myJsonModel);

		},

		onDeletepress: function() {
			var model = this.getView().getModel();
			var table = this.getView().byId("idStudentTable");
			var rowItems = table.getSelectedItems();
			var data = model.getProperty("/datas");
			for (var i = 0; i < rowItems.length; i++) {
				data = data.filter(item => item.id != rowItems[i].getCells()[0].getText());
			}
			model.setProperty("/datas", data);
			this.getView().setModel(model);
		}

	});
});
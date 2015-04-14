Ti.UI.setBackgroundColor('#000');

//data array
var vehicles = [{title: "Dodge"}, {title: "Chrysler"}, {title: "Jeep"}, {title: "Ram"}, {title: "Fiat"}];
var dodge = [{title: "Challenger"}, {title: "Charger"}, {title: "Dart"}, {title: "Durango"}, {title: "Grand Caravan"}, {title: "Journey"}, {title: "Viper"}];
var chrysler = [{title: "200"}, {title: "300"}, {title: "Town & Country"}];
var jeep = [{title: "Renegade"}, {title: "Wrangler"}, {title: "Grand Cherokee"}, {title: "Compass"}, {title: "Patriot"}, {title: "Cherokee"}];
var fiat = [{title: "500e"}, {title: "500L"}, {title: "500"}, {title: "500X"}, {title: "500 Cabrio"}, {title: "500 Abarth"}];





var mainWindow = Ti.UI.createWindow({
	backgroundColor: "CCC"
});


//TITLE BAR

var titleBar = Ti.UI.createView({
	backgroundColor: "#FFF",
	height: 60,
	top: 0
});

var titleBorder = Ti.UI.createView({
	backgroundColor: "#000",
	height: 1,
	top: titleBar.height + titleBar.top
});

var titleLabel = Ti.UI.createLabel({
	text: "FCA US Vehicle Line-Up",
	font: {fontSize: 18, fontFamily: "Copperplate"},
	textAlign: "center",
	bottom: 3
});


//TABLE VIEW



if(Ti.Platform.name === "iPhone OS"){
	cars.style = Ti.UI.iPhone.TableViewStyle.GROUPED;	
};

//POPULATE ROWS

for(var c=0, v=vehicles.length; c<v; c++){
	var cars = Ti.UI.createTableView({
	data: vehicles,
	top: titleBorder.height + titleBorder.top
});
};


//DISPLAY

var loadVehicles = require('vehicles');

mainWindow.open();
mainWindow.add(titleBar, titleBorder, cars);

titleBar.add(titleLabel);







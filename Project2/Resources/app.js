Ti.UI.setBackgroundColor('#000');

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



var menuTable = Ti.UI.createTableView({
	top: titleBorder.top + titleBorder.height
	
});







var loadVehicles = require('vehicles');

titleBar.add(titleLabel);
mainWindow.add(titleBar, titleBorder, menuTable);
mainWindow.open();





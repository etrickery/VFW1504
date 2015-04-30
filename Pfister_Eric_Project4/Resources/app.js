// Eric Pfister
// VFA 1504 01
// 04-27-15

		Ti.UI.setBackgroundColor = '#000';



//VARIABLES
		var imageCollectionFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
		var imageCollection = imageCollectionFolder.getDirectoryListing();
		var numImages = imageCollection.length;
		var displayWidth = Ti.Platform.displayCaps.platformWidth;
		var displayHeight = Ti.Platform.displayCaps.platformHeight;
		var pageName = 'Final Project';



//MAIN WINDOW
		
		var mainWindow = Ti.UI.createWindow({
			backgroundColor: '#CCC'
		});

		var titleBarView = Ti.UI.createView({
			height: 60,
			backgroundColor: '#FFF',
			top: 0
		});
		
		var titleBarLabel = Ti.UI.createLabel({
			text: 'Final Project',
			font: {fontSize: 14, fontFamily: "Copperplate", fontColor: "#000"},
			bottom: 5
		});
		
		var titleBarBorder = Ti.UI.createView({
			height: 1,
			backgroundColor: '#000',
			bottom: 0
		});
		
		titleBarView.add(titleBarLabel, titleBarBorder);


//BUILD
		var loadMainMenu = require('mainMenu');
		
		mainWindow.add(titleBarView);
		mainWindow.open();
		

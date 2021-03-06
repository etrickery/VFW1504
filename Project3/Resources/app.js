
//Eric Pfister
//VFA 1504 01
//04-20-2015


Ti.UI.setBackgroundColor = '#000';

var screenWidth = Ti.Platform.displayCaps.platformWidth;
var screenHeight = Ti.Platform.displayCaps.platformHeight;
var numRows = 4;
var gap = 10;
var imageCollectionFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageCollection = imageCollectionFolder.getDirectoryListing();
var numImages = imageCollection.length;
var realWidth = (screenWidth - (numRows + 1)*gap);
var imageSize = realWidth / numRows;


var mainMenu = Ti.UI.createWindow({
	backgroundColor: '#ddd'
});


//titlebar

var titleBar = Ti.UI.createView({
	backgroundColor: '#FFF',
	height: 60,
	top: 0
});
	
var titleBarBorder = Ti.UI.createView({
	backgroundColor: '#333',
	height: 1,
	top: titleBar.height + titleBar.top
});

var titleBarLabel = Ti.UI.createLabel({
	text: 'Project 3: Image Gallery',
	bottom: 3,
	align: 'center',
});

titleBar.add(titleBarLabel);




//menu

var galleryButton = Ti.UI.createView({
	top: titleBarBorder.top + 10,
	borderWidth: 1,
	borderRadius: 10,
	backgroundColor: '#FFF',
	height: 250,
	width: screenWidth - 10
});

var enterGallery = Ti.UI.createLabel({
	text: 'GALLERY',
	align: 'center',
	bottom: 10,
	right: 10,
	font: {fontSize: 36, fontFamily: "Helvetica"},
});

var aboutButton = Ti.UI.createView({
	top: galleryButton.top + galleryButton.height + 10,
	borderWidth: 1,
	borderRadius: 10,
	backgroundColor: '#FFF',
	height: 250,
	width: screenWidth - 10
});

var enterAbout = Ti.UI.createLabel({
	text: 'ABOUT',
	align: 'center',
	top: 200,
	right: 10,
	font: {fontSize: 36, fontFamily: "Helvetica"},
});


galleryButton.add(enterGallery);
aboutButton.add(enterAbout);




//load page
var loadGalleryViewer = require('galleryViewer');


mainMenu.add(titleBar, titleBarBorder, galleryButton, aboutButton);
mainMenu.open();









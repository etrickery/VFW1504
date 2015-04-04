//Eric Pfister
//Quote Viewer app
//

Ti.UI.setBackground('#000');

//Define main window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: '#fff',
	backgroundImage: 'pattern.png',
	backgroundRepeat: true,
	title: 'Quote Viewer'
});

//Draw quote window
var quoteView = Ti.UI.createView({
	backgroundColor: '#888',
	borderRadius: 5,
	borderWidth: 1,
	borderColor: '#fff',
	top: '85%',
	height: '10%',
	width: '90%',
});

//Draw previous nav button
var prevQuoteNav = Ti.UI.createView({
	backgroundColor: '#888',
	borderRadius: 5,
	borderWidth: 1,
	borderColor: '#fff',
	top: '85%',
	height: '10%',
	align: 'left',
	width: '45%',
});

//Draw previous text
var prev = Ti.UI.createLabel({
	text: "<< PREV",
	color: '#fff',
	font: {
		fontSize: 30, 
		fontFamily: 'Copperplate-Bold', 
		fontWeight: 'Bold'
	},
	top: '8',
	align: 'left',
	left: '5%'
	
});

//Draw Next nav button
var nextQuoteNav = Ti.UI.createView({
	backgroundColor: '#888',
	borderRadius: 5,
	borderWidth: 1,
	borderColor: '#fff',
	top: '85%',
	height: '10%',
	align: 'right',
	width: '45%',
});

//Draw next text
var next = Ti.UI.createLabel({
	text: "NEXT >>",
	color: '#fff',
	font: {
		fontSize: 30, 
		fontFamily: 'Copperplate-Bold', 
		fontWeight: 'Bold'
	},
	top: '8',
	align: 'right',
	right: '5%'	
	
});

var loadContent = require(content.js);


mainWindow.open();
mainWindow.add(quoteView, prevQuoteNav, nextQuoteNav);
prevQuoteNav.add(prev);
nextQuoteNav.add(next);



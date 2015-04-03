//Eric Pfister
//Quote Viewer app
//

Ti.UI.setBackground('#000');


var mainWindow = Ti.UI.createWindow({
	backgroundColor: '#fff',
	backgroundImage: 'pattern.png',
	backgroundRepeat: true,
	title: 'My first window'
	
});

var quoteView = Ti.UI.createView({	
	backgroundColor: '#CCC',
	borderRadius: 5,
	borderWidth: 1,
	borderColor: '#fff',
	top: 20,
	height: '80%',
	width: '90%',
	id: 'QuoteBox'
});

var quoteNav = Ti.UI.createView({
	backgroundColor: '#888',
	borderRadius: 5,
	borderWidth: 1,
	borderColor: '#fff',
	top: '85%',
	height: '10%',
	width: '90%',
	id: 'NavBox'
});

var quoteText = Ti.UI.createLabel({
	text: 'Quote test',
	color: '#fff',
	font: {
		fontSize: 22, 
		fontFamily: 'Baskerville', 
		fontWeight: 'Bold',
		fontStyle: 'italic'
	},
	top: '5%',
	left: '5%',
	right: '5%'
	
	
});




quoteView.add(quoteText);
mainWindow.add(quoteNav);
mainWindow.add(quoteView);
mainWindow.open();




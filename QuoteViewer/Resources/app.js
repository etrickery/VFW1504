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


mainWindow.open();
var loadContent = require(content);


//Eric Pfister
//Quote Viewer app
//

Ti.UI.setBackground('#000');

var quoteList;
var q;

//Define main window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: '#fff',
	backgroundImage: 'pattern.png',
	backgroundRepeat: true
});

//Draw title bar
var titleBar = Ti.UI.createView({
	backgroundColor: '#fff',
	borderWidth: 1,
	borderColor: '#fff',
	top: '0',
	height: '5%',
	width: '100%'
});

//Title bar text
var titleText = Ti.UI.createLabel({
	color: 'black',
	font: {
		fontSize: 12, 
		fontFamily: 'Helvetica'
	},
	top: '16',
	align: 'center',
	text: "Quote viewer"
});



//Draw quote window
var quoteView = Ti.UI.createView({
	backgroundColor: '#888',
	borderRadius: 5,
	borderWidth: 1,
	borderColor: '#fff',
	top: '10%',
	height: '80%',
	width: '90%'
});

//quote text
var quoteText = Ti.UI.createLabel({
	color: '#fff',
	font: {
		fontSize: 30, 
		fontFamily: 'Helvetica'
	},
	top: '5',
	left: '5',
	right: '5',
	align: 'left',
	text: "Quote Viewer"
});

//Draw previous nav button
var prevQuoteNav = Ti.UI.createView({
	backgroundColor: '#888',
	borderRadius: 5,
	borderWidth: 1,
	borderColor: '#fff',
	top: '93%',
	left: '5%',
	height: '5%',
	align: 'left',
	width: '40%'
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
	top: '1',
	align: 'left',
	left: '5%'
	
});

//Draw Next nav button
var nextQuoteNav = Ti.UI.createView({
	backgroundColor: '#888',
	borderRadius: 5,
	borderWidth: 1,
	borderColor: '#fff',
	top: '93%',
	right: '5%',
	height: '5%',
	align: 'right',
	width: '40%'
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
	top: '1',
	align: 'right',
	right: '5%'	
	
});

//counter variable
var q = "0";

//Quote list array
var quoteList = [];


//define quoteText
var quoteText;
/*
//nextQuote function
var nextQuote = function(){
	if (q < quoteList.length) {
		quoteView.hide();
		quoteView = null;
		for(i = quoteList.length; q<i; q++){
			quoteView = Ti.UI.createView({
				backgroundColor: '#888',
				borderRadius: 5,
				borderWidth: 1,
				borderColor: '#fff',
				top: '10%',
				height: '80%',
				width: '90%'
			});
			quoteText = Ti.UI.createLabel({
				color: '#fff',
				font: {
					fontSize: 30, 
					fontFamily: 'Helvetica'
				},
				top: '5',
				left: '5',
				right: '5',
				align: 'left',
				text: quoteList[q]
			});
			mainWindow.add(quoteView);
			quoteView.add(quoteText);
		};
	} else {
		q=0;
	}
};

//prevQuote function
var prevQuote = function(){
	if (q > 0){
		quoteView.hide();
		quoteView = null;
		for(; q>-1; q--){
			quoteView = Ti.UI.createView({
				backgroundColor: '#888',
				borderRadius: 5,
				borderWidth: 1,
				borderColor: '#fff',
				top: '10%',
				height: '80%',
				width: '90%'
			});
			quoteText = Ti.UI.createLabel({
				color: '#fff',
				font: {
					fontSize: 30, 
					fontFamily: 'Helvetica'
				},
				top: '5',
				left: '5',
				right: '5',
				align: 'left',
				text: quoteList[q]
			});
			mainWindow.add(quoteView);
			quoteView.add(quoteText);
			
		};
	} else {
		q = quoteList.length;
		
	}
};

var loadContent = require('content');

//Event Listeners
nextQuoteNav.addEventListener("click", nextQuote);
prevQuoteNav.addEventListener("click", prevQuote);

*/
mainWindow.open();
mainWindow.add(titleBar, quoteView, prevQuoteNav, nextQuoteNav);
prevQuoteNav.add(prev);
nextQuoteNav.add(next);
titleBar.add(titleText);




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
var quoteNav = Ti.UI.createView({
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
	align: 'center',
	align: 'left',
	left: '5%'
	
});

//Draw Next nav button
var quoteNav = Ti.UI.createView({
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
	align: 'center',
	align: 'right',
	right: '5%'	
	
});





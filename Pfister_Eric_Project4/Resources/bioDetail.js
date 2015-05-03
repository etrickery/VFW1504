
var openDetail = function(){
//BIO MENU		
		var bioMenuPage = require('bio');
		
		
		var closeBioDetail = function(){
				detailWindow.close();
		};
	
		var character = bioMenuPage.clickNumber;
		
	
		pageName = character + "'s bio";
	
		var detailWindow = Ti.UI.createWindow({
			backgroundColor: '#CCC'
		});
		
		
	//TITLE BAR		
		var titleBarView = Ti.UI.createView({
			height: 60,
			backgroundColor: '#FFF',
			top: 0
		});
		
		var titleBarLabel = Ti.UI.createLabel({
			text: pageName,
			font: {fontSize: 14, fontFamily: "Copperplate", fontColor: "#000"},
			bottom: 5
		});
		
		var titleBarBorder = Ti.UI.createView({
			height: 1,
			backgroundColor: '#000',
			bottom: 0
		});
		
		titleBarView.add(titleBarLabel, titleBarBorder);

	
	
//IMAGE
		var bioImage = Ti.UI.createImageView({
						image: "images/" + character + ".jpg",
						width: displayWidth,
						title: "character",
						align: 'center',
						top: '10',
		});
//IMAGE LABEL		
		var bioImageLabel = Ti.UI.createLabel({
			text: character,
			font: {fontSize: 24, fontFamily: "Copperplate", fontColor: "#000"},
			bottom: 80
		});
	//SPY SCORE METER AND BIO DESCRIPTION LOOP THROUGH JSON OBJECT FOR VALUES
		var spyScore;
		var bioDescrip;
		for(a in bioObject){
			
			if(a === character){
				for(b in bioObject[a]){
					
					if(b === "details"){
						for(c in bioObject[a].details[0]){
							bioDescrip = bioObject[a].details[0][c];
							spyScore = bioObject[a].footer;
						}	
					}
					
				}
				
			};
			
		};
		
	//SKILL METER	
		var bioImageDescrip = Ti.UI.createLabel({
			text: bioDescrip,
			width: displayWidth - 20,
			wordWrap: true,
			font: {fontSize: 12, fontFamily: "Copperplate", fontColor: "#EEE"},
			bottom: 10
		});

		
		var skillScoreRange = Ti.UI.createView({
			width: displayWidth - 20,
			left: 10,
			height: 20,
			backgroundColor: '#000',
			bottom: 120
		});
		
		var skillScore = Ti.UI.createView({
			width: (displayWidth - 20) * ((spyScore/100) * 2),
			left: 0,
			height: 20,
			backgroundColor: '#AAC',
			verticalAlign: 'center'
		});
		
		
		
		var skillScoreLabel = Ti.UI.createLabel({
			text: "SPY SCORE = " + spyScore,
			font: {fontSize: 16, fontFamily: "Copperplate", fontColor: "#FFF"},
			left: 0,
			verticalAlign: 'center'
		});

		skillScore.add(skillScoreLabel)
		skillScoreRange.add(skillScore);











	

		var bioImageBackground = Ti.UI.createView({
				backgroundColor: '#FFF',
				width: displayWidth,
				verticalAlign: 'center',
				borderRadius: 10,
				height: displayHeight - titleBarBorder.height - 140
		});	
	
	
		bioImageBackground.add(bioImage, bioImageLabel, bioImageDescrip, skillScoreRange);
	
	
	//CLOSE BUTTON
	
	
	
		var closeButton = Ti.UI.createView({
				backgroundColor: '#FFF',
				width: displayWidth / 4,
				bottom: 5,
				right: 5,
				borderRadius: 10,
				height: 20
		});
		
		var closeButtonLabel = Ti.UI.createLabel({
				text: 'close',
				color: '#000',
				font: {fontSize: 14, fontFamily: "Copperplate"},
				verticalAlign: 'center',
				align: 'center'
		});
		
		closeButton.add(closeButtonLabel);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		closeButton.addEventListener('click', closeBioDetail);
		
		
	
	
	

	
		detailWindow.add(titleBarView, closeButton, bioImageBackground);
		detailWindow.open();
		
};





















var bioObject = {
	"beth": {
		"title": "Beth",
		"footer": "33",
		"details": 
				[
					{"description": "Beth is the most dangerous and yet most beneficial contact in your dossier. Her resources and skills are unmatched, and She is ready at any instant to provide maximum information regarding your ex."}
				]
	},
	
	"carl": {
		"title": "Carl",
		"footer": "44",
		"details": 
				[
					{"description": "There are no details on Carl."}
				]
	},
	
	
	"ed": {
		"title": "Ed",
		"footer": "22",
		"details": 
				[
					{"description": "Ed's natural ability to coexist with lizards makes him your optimal choice for outdoor activities."}
				]
	},
	
	
	"jarred": {
		"title": "Jarred",
		"footer": "33",
		"details": 
				[
					{"description": "Jarred is a teenager with a knack for climbing. He will be your first contact when you are dealing with trees or large rocks."}
				]
	},
	
	
	"julia": {
		"title": "Julia",
		"footer": "55",
		"details": 
				[
					{"description": "The most comprehensive training available and relentless dedication make Julia one of the most advanced allies in your endeavors."}
				]
	},
	
	
	"pete": {
		"title": "Pete",
		"footer": "11",
		"details": 
				[
					{"description": "Pete is a giraffe."}
				]
	}
	
	
};


exports.bioObject = bioObject;
exports.openDetail = openDetail;

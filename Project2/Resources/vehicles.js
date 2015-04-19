//json data

var mopar = {
	"dodge": {
		"title": "Dodge",
		"footer": "Dodge vehicles",
		"cars": [
			{"model": "Challenger", "description": "The current third-generation Challenger is a rear-wheel-drive coupe sporting a variety of powerful engines and equipment. The most recent Hellcat Challenger boasts 707 horsepower, and has a top speed over 206MPH!"},
			{"model": "Charger", "description": "The Charger has been around in some form since 1964, and was featured as the bright orange 'General Lee' on television's 'The Dukes of Hazzard'. Currently a four door Charger with a 'Pentastar' V6 engine can achieve over 34MPG on the highway."},
			{"model": "Dart", "description": "The Dart is buit in Belvidere, IL. Travis Pastrana drove a Dart in his win at New Hampshire in 2012 during his stint as a driver for Dodge in the Global RallyCross series. Of course, this racing version had over 600 horsepower and a six-speed transmission mated to an all-wheel-drive system."},
			{"model": "Durango", "description": "The new Durango is a large family sport-utility vehicle that has been discontinued. Fiat's plans are to focus each brand on a segment, with Jeep's Grand Cherokee taking the place of the Durango for good next year. Dodge will retain the badge, for likely later use in a cross-over."},
			{"model": "Grand Caravan", "description": "Along with the Durango, the Grand Caravan is due to be discontinued. A staple in drive-ways across the globe, the Grand Caravan has and currently is one of the best selling vehicles of all time. The first minivan sported the badge, and the Grand Caravan will be outlived by Chrysler's Town & Country after 2015."},
			{"model": "Journey", "description": "The Journey sports a four-cylinder or V6, and is sold around the world, also under other badges like the Fiat Freemont. A small SUV, the Journey shares the current brand's recent facelift and 'Crosshairs' grille."},
			{"model": "Viper", "description": "The current Viper sports an 8.4 liter 10 cylinder engine that pulls over 600 horsepower from the gastank. All of this, while being insanely lightweight and hovering a few inches above the pavement."},
			
		]
	},
	
	"chrysler": {
		"title": "Chrysler",
		"footer": "Chrysler vehicles",
		"cars": [
			{"model": "200", "description": "In 2010, the Sebring was replaced by the 200, appearing in the Superbowl XLV ad which featured Eminem. The 2nd generation launched in 2015 with a completely new exterior and interior."},
			{"model": "300", "description": "Chrysler's 300 is a upscale luxury sedan sharing much of the drivetrain and suspension with the Charger and other RWD FCA vehicles. The 300 was redesigned in 2011 and set the style cues for the Chrysler brand."},
			{"model": "Town & Country", "description": "The Town & Country is a luxury version of the Caravan, and will remain after the elimination of the Dodge variant next year."}
			]
	},
	
	
	"jeep": {
		"title": "Jeep",
		"footer": "Jeep vehicles",
		"cars": [
			{"model": "Renegade", "description": "Sharing a platform with the Fiat 500X, the Renegade is a brand new Jeep meant to compete in the small car market that has exploded in popularity. While front wheel drive, it can be equipped with either of two 4WD systems that are more than capable off-road."},
			{"model": "Wrangler", "description": "Currently available as a 2-door compact or 4-door mid-sized vehicle, the Wrangler remains one of the most popular 4WD vehicles on the planet. With a convertible top, removeable doors, and more accessories than any other modern vehicle, the Wrangler is extremely customizeable and emphasizes a go-anywhere attitude."},
			{"model": "Grand Cherokee", "description": "The Grand Cherokee shares the Durango's platform, and is the flagship SUV of FCA in the US. Next year, Jeep will add third-row seating as it carries on the chassis for Chrysler."},
			{"model": "Compass", "description": "The Compass and Patriot are compact entry-level vehicles for the Jeep brand. With suspension more tailored to on-road handling, the Compass was designed as a car for Jeep-fans."},
			{"model": "Patriot", "description": "The Compass and Patriot are compact entry-level vehicles for the Jeep brand. The Patriot is a small Jeep-styled wagon with more off-road ideas in mind during design."},
			{"model": "Cherokee", "description": "Achieving reasonable fuel economy and upscale handling and luxury, the Cherokee tries to bridge the gap between the ultra capable Wrangler and the high-class Grand Cherokee. With a complete redesign in 2014, the model is a drasticaly different vehicle than its predecessor."}
		]
	},
	
	
	"fiat": {
		"title": "Fiat",
		"footer": "Fiat vehicles",
		"cars": [
			{"model": "500e", "description": "A combined 116mpg, the 500e is a hybrid version of the subcompact Fiat 500. Fiat made many different design changes to accomplish the fuel economy goals of the hybrid variant, and boasts a 100% charge in 4 hours.."},
			{"model": "500L", "description": "Finally, Fiat has delivered a slightly larger, 4-door version of their standard 500."},
			{"model": "500", "description": "A venerable moniker, finally arriving on American shores, the 500 is a subcompact vehicle with a seemingly larger interior than exterior. Achieving excellent fuel economy and in-town handling, the vehicle is cute and utilitarian."},
			{"model": "500X", "description": "The X is a slightly larger version, akin to the 500L, but meant to enter the subcompact SUV market, if there is such a market."},
			{"model": "500 Cabrio", "description": "A 500 with a retractable roof."},
			{"model": "500 Abarth", "description": "With a 1.4l Multiair engine putting out 160hp and 170lb-ft of torque, and weighing about 2000lbs, the Abarth edition is absolutely insane and only for those with a few screws loose."}
		]
	}
	
};


//table data 

var modelDetail = function(){
	var modelWindow = Ti.UI.createWindow({
		backgroundColor: "CCC"
	});
	
	var modelTitleBar = Ti.UI.createView({
		backgroundColor: "#FFF",
		height: 60,
		top: 0
	});
	
	var modelTitleBorder = Ti.UI.createView({
		backgroundColor: "#000",
		height: 1,
		top: modelTitleBar.height + modelTitleBar.top
	});
	
	var modelTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 18, fontFamily: "Copperplate"},
		textAlign: "center",
		bottom: 3
	});
	
	
	var modelDetailView = Ti.UI.createView({
		borderWidth: 1,
		borderColor: '#000',
		backgroundColor: '#FFF',
		top: '10%',
		height: '70%',
		width: '90%'
	});
	
	var modelDetailLabel = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 16, fontFamily: "Arial"},
		textAlign: "justify",
		top: '5%',
		left: '5%',
		right: '5%'
		
	});
	
	var modelDetailExitView = Ti.UI.createView({
		borderWidth: 1,
		borderColor: '#000',
		backgroundColor: '#FFF',
		top: '85%',
		height: '5%',
		width: '90%'
	});
	
	var modelDetailExitLabel = Ti.UI.createLabel({
		text: "Back to vehicle list",
		font: {fontSize: 18, fontFamily: "Arial", fontColor: "#000"},
		textAlign: "center"
	});
	
	var closeWindow = function(){
		modelWindow.close();	
	};

	modelDetailExitView.addEventListener("click", closeWindow);
	
	modelDetailExitView.add(modelDetailExitLabel);
	modelDetailView.add(modelDetailLabel);
	modelTitleBar.add(modelTitleLabel);
	modelWindow.add(modelTitleBar, modelTitleBorder, modelDetailView, modelDetailExitView);
	modelWindow.open();
	
};



var dodgeBrand = Ti.UI.createTableViewSection({
		headerTitle: "Dodge",
		footerTitle: ""
});

for(d in mopar){
	if(d === "dodge"){																														
		for(o in mopar[d]){																					
			if(o === "cars"){																				
				for(var g=0; g<mopar[d].cars.length; g++){									
					for(e in mopar[d].cars[g]){																					
						if(e === "model"){																				
							var carRow = Ti.UI.createTableViewRow({											
								title: mopar[d].cars[g][e],
								desc: mopar[d].cars[g].description,
								hasChild: true																			
							});
							if(Ti.Platform.name === "iPhone OS"){
								carRow.hasChild = false;
								carRow.hasDetail = true;
							}																																
							dodgeBrand.add(carRow);
							carRow.addEventListener("click", modelDetail);																						
							console.log(mopar[d].cars[g][e]);
						}
					}
				}
			}	
		}
	}	
}	

var chryslerBrand = Ti.UI.createTableViewSection({
		headerTitle: "Chrysler",
		footerTitle: ""
});

for(d in mopar){
	if(d === "chrysler"){																														
		for(o in mopar[d]){																					
			if(o === "cars"){																				
				for(var g=0; g<mopar[d].cars.length; g++){									
					for(e in mopar[d].cars[g]){																					
						if(e === "model"){																				
							var carRow = Ti.UI.createTableViewRow({											
								title: mopar[d].cars[g][e],
								desc: mopar[d].cars[g].description,
								hasChild: true																						
							});	
							if(Ti.Platform.name === "iPhone OS"){
								carRow.hasChild = false;
								carRow.hasDetail = true;
							}																																	
							chryslerBrand.add(carRow);
							carRow.addEventListener("click", modelDetail);																						
							console.log(mopar[d].cars[g][e]);
						}
					}
				}
			}	
		}
	}	
}	


var jeepBrand = Ti.UI.createTableViewSection({
		headerTitle: "Jeep",
		footerTitle: ""
});

for(d in mopar){
	if(d === "jeep"){																														
		for(o in mopar[d]){																					
			if(o === "cars"){																				
				for(var g=0; g<mopar[d].cars.length; g++){									
					for(e in mopar[d].cars[g]){																					
						if(e === "model"){																				
							var carRow = Ti.UI.createTableViewRow({											
								title: mopar[d].cars[g][e],
								desc: mopar[d].cars[g].description,
								hasChild: true																			
							});	
							if(Ti.Platform.name === "iPhone OS"){
								carRow.hasChild = false;
								carRow.hasDetail = true;
							}																																	
							jeepBrand.add(carRow);
							carRow.addEventListener("click", modelDetail);																						
							console.log(mopar[d].cars[g][e]);
						}
					}
				}
			}	
		}
	}	
}	



var fiatBrand = Ti.UI.createTableViewSection({
		headerTitle: "Fiat",
		footerTitle: ""
});

for(d in mopar){
	if(d === "fiat"){																														
		for(o in mopar[d]){																					
			if(o === "cars"){																				
				for(var g=0; g<mopar[d].cars.length; g++){									
					for(e in mopar[d].cars[g]){																					
						if(e === "model"){																				
							var carRow = Ti.UI.createTableViewRow({											
								title: mopar[d].cars[g][e],
								desc: mopar[d].cars[g].description,
								hasChild: true																										
							});	
							if(Ti.Platform.name === "iPhone OS"){
								carRow.hasChild = false;
								carRow.hasDetail = true;
							}																																	
							fiatBrand.add(carRow);	
							carRow.addEventListener("click", modelDetail);																					
							console.log(mopar[d].cars[g][e]);
						}
					}
				}
			}	
		}
	}	
}	


var brandSections = [dodgeBrand, chryslerBrand, jeepBrand, fiatBrand];
menuTable.setData(brandSections);



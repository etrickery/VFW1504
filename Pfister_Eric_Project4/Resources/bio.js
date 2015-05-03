
//OPEN BIO PAGE
var openBio = function(){
				
				loadBioDetail = require('bioDetail');
				
				var closeBio = function(){
					bioMenuWindow.close();
				};
				
				
				pageName = "Bio Menu";
							
				var bioMenuWindow =	Ti.UI.createWindow({
					backgroundColor: '#CCC'
				});
				
				var bioMenuTitleBarView = Ti.UI.createView({
					height: 60,
					backgroundColor: '#FFF',
					top: 0
				});
				
				var bioMenuTitleBarLabel = Ti.UI.createLabel({
					text: pageName,
					font: {fontSize: 14, fontFamily: "Copperplate", fontColor: "#000"},
					bottom: 5
				});
				
				var bioMenuTitleBarBorder = Ti.UI.createView({
					height: 1,
					backgroundColor: '#000',
					bottom: 0
				});
				
				bioMenuTitleBarView.add(bioMenuTitleBarLabel, bioMenuTitleBarBorder);
			
				
				
				
				
				
				
				
				var bioMenuTable = Ti.UI.createTableView({
					backgroundColor: '#FFF',
					height: displayHeight / 2,
					width: displayWidth,
					verticalAlign: 'center'
				});
				
				if(Ti.Platform.name === "iPhone OS"){
					bioMenuTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;	
				};
				
				
				var bioMenuTableSection = Ti.UI.createTableViewSection({
					headerTitle: "Select a character",
					footerTitle: ""
				});
				
				
		//BUILD MENU		
				for(z in loadBioDetail.bioObject){
					console.log(z);
					var bioName = Ti.UI.createTableViewRow({
						title: z,
						hasChild: true,
						
					});
					
					if(Ti.Platform.name === "iPhone OS"){
								bioName.hasChild = false;
								bioName.hasDetail = true;
					};
					bioMenuTableSection.add(bioName);

				};
				
				
				var sections = [bioMenuTableSection];
				bioMenuTable.setData(sections);
				
				
				
				
				
				
		//MENU ACTION		
				bioMenuTable.addEventListener('click', function(clickEvent){
					clickNumber = clickEvent.source.title;
					exports.clickNumber = clickNumber;
					loadBioDetail.openDetail();
				});
				
				
				
				
				
				
				
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
				
				
				
				
				
				
				
				
				closeButton.addEventListener('click', closeBio);
				
				
				
				
				
				
				
				bioMenuWindow.add(bioMenuTitleBarView, closeButton, bioMenuTable);
				bioMenuWindow.open();	

			
					
};
			

//EXPORT DEFINITION
exports.showBio = openBio;






			




			
			
	

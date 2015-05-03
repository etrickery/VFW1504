

//WINDOW VIEW
			var menuView = Ti.UI.createView({
				height: displayHeight - 70,
				width: displayWidth,
				bottom: 0,
				backgroundColor: '#FFF'
			});
			
			var menuViewBorder = Ti.UI.createView({
				height: 1,
				backgroundColor: '#000',
				top: 0
			});



//MENU

		//LOGO
				var logo = Ti.UI.createView({
					backgroundColor: '#CCC',
					top: 10,
					right: 0,
					width: displayWidth,
					left: 10,
					borderRadius: 10,
					height: 200
				});
				
				var logoLabel = Ti.UI.createLabel({
					text: 'dossieR',
					color: 'RED',
					font: {fontSize: 84, fontFamily: "Copperplate"},
					bottom: 0,
					left: 5
				});
				
				logo.add(logoLabel);
				
				

		//GALLERY BUTTON
	
				var gallery = Ti.UI.createView({
					backgroundColor: '#CCC',
					top: logo.top + logo.height + 20,
					right: 0,
					width: displayWidth,
					left: 20,
					borderRadius: 10,
					height: 70
				});
				
				var galleryLabel = Ti.UI.createLabel({
					text: 'GALLERY',
					color: '#FFF',
					font: {fontSize: 44, fontFamily: "Copperplate"},
					bottom: 0,
					left: 5
				});
				
				gallery.add(galleryLabel);

		//DATA BUTTON
		
				var bio = Ti.UI.createView({
					backgroundColor: '#CCC',
					top: gallery.top + gallery.height + 10,
					right: 0,
					width: displayWidth,
					left: 20,
					borderRadius: 10,
					height: 70
				});
				
				var bioLabel = Ti.UI.createLabel({
					text: 'BIO',
					color: '#FFF',
					font: {fontSize: 44, fontFamily: "Copperplate"},
					bottom: 0,
					left: 5
				});
				
				bio.add(bioLabel);
	
		//COMMUNICATOR BUTTON
		
				var communicator = Ti.UI.createView({
					backgroundColor: '#CCC',
					top: bio.top + bio.height + 10,
					width: displayWidth,
					left: 20,
					borderRadius: 10,
					height: 70
				});
				
				var communicatorLabel = Ti.UI.createLabel({
					text: 'COMM',
					color: '#FFF',
					font: {fontSize: 44, fontFamily: "Copperplate"},
					bottom: 0,
					left: 5
				});
				
				communicator.add(communicatorLabel);

		//PROJECT LABEL
		
				var project = Ti.UI.createView({
					backgroundColor: '#CCC',
					top: communicator.top + communicator.height + 20,
					width: displayWidth,
					left: 10,
					borderRadius: 10,
					height: 100
				});
				
				var projectLabel = Ti.UI.createLabel({
					text: 'pfisterEric.1504.01',
					color: '#FFF',
					font: {fontSize: 24, fontFamily: "Copperplate"},
					verticalAlign: 0,
					align: 'center'
				});
				
				project.add(projectLabel);

//LOAD JS FILES
var loadGallery = require('gallery');
var loadBio = require('bio');
var loadComm = require('comm');


//MENU EVENT LISTENERS
gallery.addEventListener("click", loadGallery.showGallery);
bio.addEventListener("click", loadBio.showBio);
communicator.addEventListener("click", loadComm.showComm);

//ADD MENU TO MAINWINDOW
menuView.add(menuViewBorder, logo, gallery, bio, communicator, project);
mainWindow.add(menuView);

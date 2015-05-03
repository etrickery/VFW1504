//OPEN GALLERY FUNCTION
		var openGallery = function(){
				
		
				
		//VARIABLE
				pageName = 'Gallery';
				var images = ["beth", "carl", "ed", "jarred", "julia", "pete"];
				var selectedImage = 'beth';
				var y = 0;
				var x = 0;
				
		//CLOSE WINDOW FUNCTION
				var closeGallery = function(){
					galleryWindow.close();
				};

				



		//TITLE BAR		
				var galleryWindow =	Ti.UI.createWindow({
					backgroundColor: '#CCC'
				});
				
				var galleryTitleBarView = Ti.UI.createView({
					height: 60,
					backgroundColor: '#FFF',
					top: 0
				});
				
				var galleryTitleBarLabel = Ti.UI.createLabel({
					text: pageName,
					font: {fontSize: 14, fontFamily: "Copperplate", fontColor: "#000"},
					bottom: 5
				});
				
				var galleryTitleBarBorder = Ti.UI.createView({
					height: 1,
					backgroundColor: '#000',
					bottom: 0
				});
				
				galleryTitleBarView.add(galleryTitleBarLabel, galleryTitleBarBorder);
				
				
				
				
				
				
				
		//DISPLAY IMAGE		
				var galleryImage = Ti.UI.createImageView({
						image: "images/beth.jpg",
						width: displayWidth,
						title: "beth",
						verticalAlign: 'center'
				});
				
				var galleryImageLabel = Ti.UI.createLabel({
						text: 'beth',
						font: {fontSize: 44, fontFamily: "Copperplate", fontColor: "#000"},
						bottom: 20

						
				});
				
				var galleryImageBackground = Ti.UI.createView({
						backgroundColor: '#FFF',
						width: displayWidth,
						verticalAlign: 'center',
						borderRadius: 10,
						height: displayHeight - galleryTitleBarBorder.height - 140
				});
			
				galleryImageBackground.add(galleryImage, galleryImageLabel);
				//galleryBio.randomImage();

			
				
			
			
		//RANDOM BUTTON	
				var randomImageButton = Ti.UI.createView({
						backgroundColor: '#FFF',
						width: displayWidth / 3,
						bottom: 5,
						left: 5,
						borderRadius: 10,
						height: 20		
				});
				
				var randomImageButtonLabel = Ti.UI.createLabel({
						text: 'New Random',
						color: '#000',
						font: {fontSize: 14, fontFamily: "Copperplate"},
						verticalAlign: 'center',
						align: 'center'
				});
			
				
		//VARIABLES USED TO CALCULATE		
				var currentImageText;
				var currentImage;
				
		//RANDOM GENERATOR
				randomImageButton.add(randomImageButtonLabel);
				randomImageButton.addEventListener('click', function(){
					while(x === y){
						x = Math.round(Math.random() * 5);
					};	
					selectedImage = images[x];
					y = x;
					galleryImage.image = "images/" + selectedImage + ".jpg";
					galleryImageLabel.text = selectedImage;
					
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
				
				closeButton.addEventListener('click', closeGallery);
				
				
	//MAIN LOADING			
				galleryWindow.add(randomImageButton, galleryTitleBarView, closeButton, galleryImageBackground);
				galleryWindow.open();	
				
				exports.galleryWindow = galleryWindow;
		
		};



//EXPORT OPEN GALLERY FUNCTION
		exports.showGallery = openGallery;






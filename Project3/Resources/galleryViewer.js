
//functions






//gallery
var openGallery = function(){
	
	//gallery window
	var galleryView = Ti.UI.createWindow({
		backgroundColor: '#CCC'
	});
	
	//gallery title bar
	var galleryTitleBar = Ti.UI.createView({
		backgroundColor: '#FFF',
		height: 60,
		top: 0
	});
		
	var galleryTitleBarBorder = Ti.UI.createView({
		backgroundColor: '#333',
		height: 1,
		top: galleryTitleBar.height + galleryTitleBar.top
	});
	
	var galleryTitleBarLabel = Ti.UI.createLabel({
		text: 'Image Gallery',
		bottom: 3,
		align: 'center',
	});
	
	galleryTitleBar.add(galleryTitleBarLabel);
		
	//return to menu button (goes in title bar)	
	var closeButton = Ti.UI.createView({
		bottom: 10,
		right: 10,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: '#FFF',
		height: 40,
		width: 92
	});
	
	var closeButtonLabel = Ti.UI.createLabel({
		text: 'BACK',
		align: 'center',
		font: {fontSize: 20, fontFamily: "Helvetica", fontColor: "#000"}
	});
	
	closeButton.add(closeButtonLabel);
	
	
	
	
	//scrollview
	
	
	var galleryUpperBorder = Ti.UI.createView({
		height: 1,
		backgroundColor: '#000',
		top: galleryTitleBarBorder.top + galleryTitleBarBorder.height + gap
	});
	
	var galleryContainer = Ti.UI.createScrollView({
		top: galleryUpperBorder.top + galleryUpperBorder.height,
		layout: 'horizontal',
		
		width: screenWidth,
		contentWidth: screenWidth,
		showVerticalScrollIndicator: true,
		Height: screenHeight - galleryTitleBarBorder.height - galleryTitleBarBorder.top - 70,
		backgroundColor: '#FFF'
	});
	
	
	
	
	
	
	
	//image detail
	var getImage = function(imageTitle){
		var imageWindow = Ti.UI.createWindow({
			backgroundColor: '#CCC'
		});
		
		//titlebar
		var detailTitleBar = Ti.UI.createView({
			backgroundColor: '#FFF',
			height: 60,
			top: 0
		});
			
		var detailTitleBarBorder = Ti.UI.createView({
			backgroundColor: '#333',
			height: 1,
			top: detailTitleBar.height + detailTitleBar.top
		});
		
		var detailTitleBarLabel = Ti.UI.createLabel({
			text: imageTitle,
			bottom: 3,
			align: 'center',
		});
		
		detailTitleBar.add(detailTitleBarLabel);
		
		var selectedImageUpperBorder = Ti.UI.createView({
			height: 1,
			backgroundColor: '#FFF',
			top: galleryUpperBorder.top + galleryUpperBorder.height
		});
		
		var selectedImageView = Ti.UI.createView({
			top: selectedImageUpperBorder.top + selectedImageUpperBorder.height,
			width: screenWidth,
			Height: screenHeight - galleryTitleBarBorder.height - galleryTitleBarBorder.top - 70,
			backgroundColor: '#000'
	
		});
		
		var selectedImage = Ti.UI.createImageView({
			image: "images/" + imageTitle,
			width: screenWidth,
			title: imageTitle,
			verticalAlign: 'center'
		});
		
		var selectedImageLowerBorder = Ti.UI.createView({
			height: 1,
			backgroundColor: '#FFF',
			top: selectedImageView.top + selectedImageView.height
		});
			
		selectedImageView.add(selectedImage);
		
		var detailCloseButton = Ti.UI.createView({
			bottom: 10,
			right: 10,
			borderWidth: 1,
			borderRadius: 10,
			backgroundColor: '#FFF',
			height: 40,
			width: 92
		});
		
		var detailCloseButtonLabel = Ti.UI.createLabel({
			text: 'BACK',
			align: 'center',
			font: {fontSize: 20, fontFamily: "Helvetica", fontColor: "#000"}
		});
		
		detailCloseButton.add(detailCloseButtonLabel);
		
		var closeGetImage = function(){
			imageWindow.close({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});	
		};
		
		//close button event listener
		detailCloseButton.addEventListener("click", closeGetImage);
		
		imageWindow.add(selectedImageView, selectedImageUpperBorder, selectedImageLowerBorder);
		
		imageWindow.add(detailTitleBar, detailTitleBarBorder, detailCloseButton);
		imageWindow.open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
	};
	
	
	
	
	for(var i=0; i<numImages; i++){
		var imageView = Ti.UI.createView({
			backgroundColor: '#000',
			top: gap,
			left: gap,
			width: imageSize,
			height: imageSize,
			borderRadius: 10,
			border: 2,
			borderColor: '#000'
		});
		var carImage = Ti.UI.createImageView({
			image: "images/" + imageCollection[i],
			width: imageSize * 2,
			title: imageCollection[i]
		});
		imageView.add(carImage);
		galleryContainer.add(imageView);
	};
	
	var galleryLowerBorder = Ti.UI.createView({
		height: 1,
		backgroundColor: '#000',
		top: galleryContainer.top + galleryContainer.height
	});
	
	
	//close gallery function
	var closeGallery = function(){
		galleryView.close({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});	
	};

	//close button event listener
	closeButton.addEventListener("click", closeGallery);
	
	galleryContainer.addEventListener("click", function(event){
		
		//be sure the border wasn't clicked and run the function
		if(event.source.title){
			getImage(event.source.title);
		};
		
	});
	
	//build gallery
	galleryView.add(galleryUpperBorder, galleryLowerBorder, closeButton);
	
	galleryView.add(galleryTitleBar, galleryTitleBarBorder, galleryContainer);
	galleryView.open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
};








//about 
var openAbout = function(){
	
	//gallery window
	var aboutView = Ti.UI.createWindow({
		backgroundColor: '#CCC'
	});
	
	//gallery title bar
	var aboutTitleBar = Ti.UI.createView({
		backgroundColor: '#FFF',
		height: 60,
		top: 0
	});
		
	var aboutTitleBarBorder = Ti.UI.createView({
		backgroundColor: '#333',
		height: 1,
		top: aboutTitleBar.height + aboutTitleBar.top
	});
	
	var aboutTitleBarLabel = Ti.UI.createLabel({
		text: 'About Project 3',
		bottom: 3,
		align: 'center',
	});
	
	aboutTitleBar.add(aboutTitleBarLabel);
		
	//return to menu button (goes in title bar)	
	var aboutCloseButton = Ti.UI.createView({
		bottom: 10,
		right: 10,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: '#FFF',
		height: 40,
		width: 92
	});
	
	var aboutCloseButtonLabel = Ti.UI.createLabel({
		text: 'BACK',
		align: 'center',
		font: {fontSize: 20, fontFamily: "Helvetica", fontColor: "#000"}
	});
	
	aboutCloseButton.add(aboutCloseButtonLabel);
	
	//about documentation
	var aboutUpperBorder = Ti.UI.createView({
		backgroundColor: '#000',
		height: 1,
		top: aboutTitleBarBorder.top + 10
	});
	
	var aboutViewer = Ti.UI.createView({
		height: 500,
		width: screenWidth,
		backgroundColor: '#FFF',
		top: aboutUpperBorder.top + aboutUpperBorder.height,
	});
	
	var aboutLabel = Ti.UI.createLabel({
		text: 'Eric Pfister \nProject 3 \nAll images are original',
		align: 'center',
		font: {fontSize: 18, fontFamily: "Helvetica", fontColor: "#000"}
	});
	
	var aboutLowerBorder = Ti.UI.createView({
		backgroundColor: '#000',
		height: 1,
		top: aboutViewer.height + aboutViewer.top
	});
	
	aboutViewer.add(aboutLabel);
	
	
	//close about function
	var closeAbout = function(){
		aboutView.close({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});	
	};

	//close button event listener
	aboutCloseButton.addEventListener("click", closeAbout);
	
	
	
	//build gallery
	aboutView.add(aboutCloseButton);
	
	aboutView.add(aboutTitleBar, aboutTitleBarBorder, aboutViewer, aboutUpperBorder, aboutLowerBorder);
	aboutView.open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
};


//enter gallery event listener
galleryButton.addEventListener("click", openGallery);
aboutButton.addEventListener("click", openAbout);




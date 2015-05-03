var openComm = function(){
		
				var closeComm = function(){
					commWindow.close();
				};
			//COMM PAGE - SIMPLE POSTING MECHANISM	
				
				pageName = "Comm";
							
				var commWindow =	Ti.UI.createWindow({
					backgroundColor: '#CCC'
				});
				
				var commTitleBarView = Ti.UI.createView({
					height: 60,
					backgroundColor: '#FFF',
					top: 0
				});
				
				var commTitleBarLabel = Ti.UI.createLabel({
					text: pageName,
					font: {fontSize: 14, fontFamily: "Copperplate", fontColor: "#000"},
					bottom: 5
				});
				
				var commTitleBarBorder = Ti.UI.createView({
					height: 1,
					backgroundColor: '#000',
					bottom: 0
				});
				
				commTitleBarView.add(commTitleBarLabel, commTitleBarBorder);


				var createSentWindow = Ti.UI.createView({
						backgroundColor: '#FFF',
						width: displayWidth - 20,
						top: 20,
						border: 1,
						borderColor: '#000',
						borderRadius: 10,
						height: 120
				});

				var createSentText = Ti.UI.createLabel({
						wordWrap: true,
						width: displayWidth - 25,
						text: '$40 Red Jack Miller Jackrabbits [Indianapolis] - for sale by owner',
						font: {fontSize: 14, fontFamily: "Copperplate", fontColor: "#000"},
						top: 10,
						align: 'center'
				});
				
				createSentWindow.add(createSentText);

				var inputText = Ti.UI.createTextArea({
						borderWidth: 1,
						borderColor: '#BBB',
						borderRadius: 10,
						color: '#777',
						font: {fontSize: 14, fontFamily: "Copperplate", fontColor: "#000"},
						keyboardType: Ti.UI.KEYBOARD_DEFAULT,
						returnKeyType: Ti.UI.RETURNKEY_GO,
						textAlign: 'left',
						wordWrap: true,
						value: '',
						bottom: 200,
						width: displayWidth - 20, 
						height : 120
				});
				
				var sendButton = Ti.UI.createButton({
						title: 'SEND',
						right: 20,
						bottom: 160,
						width: 100,
						height: 50
				});
				
				
				sendButton.addEventListener('click',function(){
					sentMsg = inputText.value;
					createSentText.text = createSentText.text + "\n" + sentMsg;
					inputText.value = "";
					
				});
				
				
				









				var commBackground = Ti.UI.createView({
						backgroundColor: '#FFF',
						width: displayWidth,
						verticalAlign: 'center',
						borderRadius: 10,
						height: displayHeight - 140
				});






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

				closeButton.addEventListener('click', closeComm);					
					
				commBackground.add(inputText, createSentWindow, sendButton);
				commWindow.add(commTitleBarView, commBackground, closeButton);
				commWindow.open();	
};


exports.showComm = openComm;







	

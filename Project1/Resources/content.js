
//quote list
var quoteList = 
	["Say what you mean, mean what you say, and don't say it mean. - Unknown", 
	"Don't cry because it's over, smile because it happened. - Dr.Suess", 
	"Be yourself; everyone else is already taken. - Oscar Wilde", 
	"Two things are infinite: the universe and human stupidity; and I'm not sure about the Universe - Albert Einstein",
	"Be the change that you wish to see in the world - Mahatma Gandhi"];

//quote list length for calculations
var p = (quoteList.length - 1);



//next function
var nextQuote = function(){
	q = q + 1;
	if (q > p) {
		q = 0;
	};
	quoteText.text = quoteList[q];
	quoteView.add(quoteText);	
	
};
	

//previous function
var prevQuote = function(){
	q = q - 1;
	if (q < 0) {
		q = p;
	};
	quoteText.text = quoteList[q];
	quoteView.add(quoteText);	
	
	console.log(q);
	console.log(quoteList[q]);
	
};

//Event Listeners
nextQuoteNav.addEventListener("click", nextQuote);
prevQuoteNav.addEventListener("click", prevQuote);


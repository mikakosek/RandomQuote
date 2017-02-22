$(function() {

    var tweetLink = "https://twitter.com/intent/tweet?text=",
        quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";

    var $quoteButton = $(".trigger").click(function(){
        getQuote();
    });

    var $quoteText = $(".quote"),
        $authorText = $(".author"),
        $tweetLink = $(".tweet");
    
    getQuote();

    function getQuote() {
        $.getJSON(quoteUrl, createTweet);
    }    

    function createTweet(input) {
        if (!input.quoteAuthor.length) {
            input.quoteAuthor = "Unknown author";
        }
        var tweetText = "Cytat dnia - " + input.quoteText + " Autor: " + input.quoteAuthor;

        if (tweetText.length > 140) {
           getQuote();
        } else {
            var tweet = tweetLink + encodeURIComponent(tweetText);
            $quoteText.text(input.quoteText);
            $authorText.text("Autor: " + input.quoteAuthor);
            $tweetLink.attr("href", tweet);
        }
    }
});
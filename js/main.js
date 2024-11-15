var quotes = [
    { text: "Do not take life too seriously. You will not get out alive.", author: "--Elbert Hubbard" },
    { text: "It's not what happens to you, but how you react to it that matters.", author: "--Epictetus" },
    { text: "Resentment is like drinking poison and waiting for your enemies to die.", author: "--Nelson Mandela" },
    { text: "The best revenge is massive success.", author: "--Frank Sinatra" },
    { text: "You miss 100% of the shots you don't take.", author: "--Wayne Gretzky" }
];

var shownQuotes = [];

function quotemaker() {
    if (shownQuotes.length === quotes.length) {
        shownQuotes = [];
    }

    var random;
    do {
        random = Math.floor(Math.random() * quotes.length);
    } while (shownQuotes.includes(random));

    shownQuotes.push(random);

    document.getElementById("paraOne").innerHTML = quotes[random].text;
    document.getElementById("paraTwo").innerHTML = quotes[random].author;
}

// define a constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read) { return `${title} by ${author}, ${pages} pages, already read`; }
        else      { return `${title} by ${author}, ${pages} pages, not yet read`; } 
    }
}

// define a function via prototype
Book.prototype.readAPage = function() {
    return "There were 3 silences...";
}

const book1 = new Book('The Name of the Wind', 'Patrick Rothfuss', '795', true);
console.log(book1.info());
console.log(book1.readAPage());
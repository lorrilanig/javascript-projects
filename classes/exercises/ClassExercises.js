// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkOutNum, isDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pageCount = pageCount;
        this.checkOutNum = checkOutNum;
        this.isDiscarded = isDiscarded;
    }
    checkOutCount (uses=1) {
        this.checkOutNum += uses;
    }
   
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkOutNum, isDiscarded) {
        super(title, author, copyrightDate, isbn, pageCount, checkOutNum, isDiscarded);
    }
    discard() {
        let year = 2024;
        if (year - this.copyrightDate >= 5){
            this.isDiscarded = true; 
        }
    }
}
class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkOutNum, isDiscarded) {
        super(title, author, copyrightDate, isbn, pageCount, checkOutNum, isDiscarded);
    }
    discard() {
        if (checkOutNum >= 100) {
            this.isDiscarded = true;
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
    let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 	1111111111111, 432, 32, false);
    console.log(prideAndPrejudice)
    let shuttleBuild = new Manual('Top Secret Shuttle Building', 'Redacted', 2013, '00000000000', 1147, 1, false);
    console.log(shuttleBuild)
// Code exercises 4 & 5 here:
shuttleBuild.discard()
console.log(shuttleBuild);
prideAndPrejudice.checkOutCount(5);
console.log(prideAndPrejudice);
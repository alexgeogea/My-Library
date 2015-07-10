var books = [];

if(typeof(Storage)  !== "undefined") {
	books = JSON.parse(localStorage.getItem('books')) || [ ];
}

// Add a new book
function addBook() {
	var titleInput = document.getElementById('title').value;
	var authorInput = document.getElementById('author').value;
	var ratingInput = document.getElementById('rating').value;
	books.push({ 'title': titleInput, 'author': authorInput, 'rating': ratingInput});
	localStorage.setItem( 'books', JSON.stringify( books ) );
};

// Display the books
var container = document.getElementById('books-container');
function displayBooks(arr) {
	arr.forEach(function(item) {
		var bookRow = document.createElement('div');
		bookRow.className = "row";
		container.appendChild(bookRow);
		var imgColumn = document.createElement('div');
		imgColumn.className = "large-4 columns";
		bookRow.appendChild(imgColumn);
		var imgBook = document.createElement('img');
		imgBook.className = "book-img";
		imgColumn.appendChild(imgBook);
		var bookColumn = document.createElement('div');
		bookColumn.className = "large-8 columns";
		bookRow.appendChild(bookColumn);
		var title = document.createElement('h3');
		title.innerText = item.title;
		bookColumn.appendChild(title);
		var author = document.createElement('p');
		author.innerText = item.author;
		bookColumn.appendChild(author);
		var rating = document.createElement('p');
		rating.innerText = item.rating;
		bookColumn.appendChild(rating);
		var input = document.createElement('input');
		input.type = "checkbox";
		input.className = "checked";
		bookColumn.appendChild(input);
		var wishBtn = document.createElement('button');
		wishBtn.innerText = "Add to wishlist";
		bookColumn.appendChild(wishBtn);
		var hr = document.createElement('hr');
		bookRow.appendChild(hr);
	});	
};
displayBooks(books);
			
// Search for a book
function searchBook() {
	var input = document.querySelector('input').value.toLowerCase();
	var booksLength = books.length;
	for (var i = 0; i<booksLength; i++ ) {
		if(books[i].title.toLowerCase().indexOf(input) != -1 || books[i].author.toLowerCase().indexOf(input) != -1) {
			document.getElementById('title').innerText = books[i].title;
			document.getElementById('author').innerText = books[i].author;
		}
	}	
};	



// Delete a book
/*function deleteBook(item) {
	var i = books.indexOf(item);
		if(i >= 0) {
			books.splice(i, 1) && localStorage.removeItem('books', i);
		}
	};
	var deleteBtn = document.querySelector('button');
	for(var n = 0; n < books.length; n++) {
		deleteBtn.addEventListener("click", deleteBook);
	}	

	var startRow = true;
	var booksCounter = 0;
	if(startRow) {
		newDiv = document.createElement('div');
		newDiv.className = "row";
		booksCounter ++;
		if(booksCounter == 3) {
			startRow = true;
			booksCounter = 0;
		}
	}
;*/
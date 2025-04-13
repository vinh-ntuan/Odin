const myLibrary = [];
const shelfElement = document.getElementById("shelf");

const addBookDialog = document.querySelector("dialog");
const addBookForm = addBookDialog.querySelector("form");
const showDialogButton = document.querySelector("dialog + button");

const cancelButton = addBookDialog.querySelector("#cancel");
const confirmButton = addBookDialog.querySelector("#confirm");

function Book(name, author) {
    this.name = name; 
    this.author = author;
    this.id = crypto.randomUUID();
    this.isRead = false;
}

showDialogButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

// Clears form when dialog is closed
addBookDialog.addEventListener("close", () => {
    addBookForm.reset();
});

cancelButton.addEventListener("click", () => {
    addBookDialog.close();
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    let name = addBookDialog.querySelector("#name").value;
    let author = addBookDialog.querySelector("#author").value;

    if (name && author) {
        addBookToLibrary(name, author);
        addBookDialog.close();
    } else {
        alert("Please fill in all fields.");
    }
});


function addBookToLibrary(name, author){
    let book = new Book(name, author);
    myLibrary.push(book);

    updateDisplay();
}

function removeBook(id){
    let index = myLibrary.findIndex(b => b.id===id);
    myLibrary.splice(index, 1);
    updateDisplay()
}

function updateDisplay(){
    let newBookElements = [];
    for (let book of myLibrary){
        newBookElements.push(createBookElement(book));
    }
    shelfElement.replaceChildren(...newBookElements);

}

function createBookElement(book){
    let bookElement = document.createElement("div");
    bookElement.setAttribute("data-bookId", book.id);
    bookElement.classList.add("book")

    let infoElement = document.createElement("p");
    infoElement.classList.add("info");
    infoElement.innerText = (book.isRead ? "Is Read ✓" : "Not Read x"  ) + "\n" +
        "Name: " + book.name + "\n" + "Author: " + book.author;

    let deleteButton = createDeleteButton(book);
    let readToggle = createReadToggle(book);

    bookElement.appendChild(infoElement);
    bookElement.appendChild(readToggle);
    bookElement.appendChild(deleteButton);
    return bookElement;
}

function createDeleteButton(book){
    let button = document.createElement("button");
    button.innerText = "Delete"
    button.addEventListener("click", ()=> {
        removeBook(book.id);
    });

    return button;
}

function createReadToggle(book){
    let button = document.createElement("button");
    button.innerText = "Change Read Status"
    button.addEventListener("click", () => {
        book.isRead = !book.isRead; 
        updateDisplay();
    })

    return button;
}


addBookToLibrary("Umineko", "Ryukishi");
addBookToLibrary("Higurashi", "Ryukishi");
addBookToLibrary("Ciconia", "Ryukishi");


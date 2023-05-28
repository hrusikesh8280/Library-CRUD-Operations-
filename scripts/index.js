// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
// const baseServerURL = `http://localhost:${
//   import.meta.env.REACT_APP_JSON_SERVER_PORT
// }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `https://render-dployement.onrender.com/books`;
let mainSection = document.getElementById("data-list-wrapper");


//Books Data
let booksData = [];

function bookDisplay(books) {
  mainSection.innerHTML = "";
  const cardList = document.createElement('div');
  cardList.classList.add('card-list');

  books.forEach(book => {
    const card = `
      <div class="card" data-id="${book.id}">
        <div class="card-image">
          <img src="${book.image}" alt="">
        </div>
        <div class="card-body">
          <h4 class="card-title">${book.title}</h4>
          <p class="card-author">${book.author}</p>
          <p class="card-category">${book.category}</p>
          <p class="card-price">${book.price}</p>
          <a href="#" class="card-link" data-id="${book.id}">Edit</a>
          <button  class="card-button" data-id="${book.id}">Delete</button>
        </div>
      </div>
    `;
    
    cardList.innerHTML += card;
    
  });

  mainSection.appendChild(cardList);
  const deleteButtons = document.querySelectorAll('.card-button');
  deleteButtons.forEach(button => {
    const bookId = button.dataset.id;
    button.addEventListener('click', () => {
      deleteBook(bookId);
    });
  });


  const editLinks = document.querySelectorAll('.card-link');
  editLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const bookId = link.dataset.id;
      BookUpdate(bookId);
    });
  });


}


// Added New ----Book
document.getElementById("add-book").addEventListener("click",async()=>{

  let bookTitleInput = document.getElementById("book-title").value
  let bookImageInput = document.getElementById("book-image").value
  let bookCategoryInput = document.getElementById("book-category").value
  let bookAuthorInput = document.getElementById("book-author").value
  let bookPriceInput = Number(document.getElementById("book-price").value)

  const newAddBook={
    title:bookTitleInput,
    image:bookImageInput,
    category:bookCategoryInput,
    author:bookAuthorInput,
    price:bookPriceInput
  }
  // postBook(newAddBook)
  const res = await fetch(`${bookURL}`,{
    method:"POST",
    body: JSON.stringify(newAddBook),
    headers:{
      "Content-Type":"application/json",
      },
  })
  getData()
  document.getElementById("book-title").value=""
  document.getElementById("book-image").value=""
  document.getElementById("book-category").value=""
  document.getElementById("book-author").value=""
  document.getElementById("book-price").value=""
})



let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");




/********************************* UPDATE BOOK ****************************************/

let updateBookBtn = document.getElementById("update-book")

updateBookBtn.addEventListener("click",async()=>{

let updateBookIdInput = document.getElementById("update-book-id").value
let updateBookTitleInput = document.getElementById("update-book-title").value
let updateBookImageInput = document.getElementById("update-book-image").value
let updateBookAuthorInput = document.getElementById("update-book-author").value
let updateBookCategoryInput = document.getElementById("update-book-category").value
let updateBookPriceInput =Number( document.getElementById("update-book-price").value)


const id=updateBookIdInput

let updateBook={
  title:updateBookTitleInput,
  image:updateBookImageInput,
  author:updateBookAuthorInput,
  category:updateBookCategoryInput,
  price: updateBookPriceInput 
}

try {
  const res = await fetch(`${bookURL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updateBook),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (res.ok) {
    getData()
    document.getElementById("update-book-id").value = "";
    document.getElementById("update-book-title").value = "";
    document.getElementById("update-book-image").value = "";
    document.getElementById("update-book-author").value = "";
    document.getElementById("update-book-category").value = "";
    document.getElementById("update-book-price").value = "";
  } else {
    console.log("Error updating the book");
  }
} catch (err) {
  console.log(err);
}

})

/*****************************  UPADTE-PRICE-ONLY  ***************************/



//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");



/************** Edit Book ***************** */

async function BookUpdate(bookId) {
  try {
    const response = await fetch(`${bookURL}/${bookId}`);
    const book = await response.json();

    updatePriceBookId.value = book.id;
    updatePriceBookPrice.value = book.price;
    updateBookIdInput.value = book.id;
    updateBookTitleInput.value = book.title;
    updateBookImageInput.value = book.image;
    updateBookAuthorInput.value = book.author;
    updateBookCategoryInput.value = book.category;
    updateBookPriceInput.value = book.price;
  } catch (err) {
    console.log(err);
  }
}

updatePriceBookPriceButton.addEventListener("click",async()=>{

  const bookId = updatePriceBookId.value;
  const bookPrice = Number(updatePriceBookPrice.value);
  const book = {
    price:bookPrice
    }
    try {
      const response = await fetch(`${bookURL}/${bookId}`, {
        method: "PATCH",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
          }
          });
          if(response.ok){
            getData()
            document.getElementById("update-price-book-id").value=""
            document.getElementById("update-price-book-price").value=""
          }else{
            alert("Error updating-price book")
          }
          } catch (err) {
            console.log(err);
            }

})


/**********      Sort By Descending Order     *******/

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

/**********      Sort By Descending Order     *******/

sortAtoZBtn.addEventListener("click",async()=>{
  console.log("bapun")
  try{
    let res=await fetch(`${bookURL}?_sort=price&_order=asc`)
    let data=await res.json()
    console.log(data)
    bookDisplay(data)
  }catch(err){
    console.log(err)
  }
})

/**********      Sort By Descending Order     *******/


sortZtoABtn.addEventListener("click",async()=>{
  console.log("bapun")
  try{
    let res=await fetch(`${bookURL}?_sort=price&_order=desc`)
    let data=await res.json()
    console.log(data)
    bookDisplay(data)
  }catch(err){
    console.log(err)
  }
})
 

/***                    FILTER FUNCTION                                   **/ 

let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");


/*********************  Filter for Classic Category    **********************/

filterClassic.addEventListener("click",()=>{
  console.log("classic filter worked")
  const filteredBooks = booksData.filter(book => book.category === "Classic");
  bookDisplay(filteredBooks)
})

/*********************  Filter for Fantasy Category    **********************/

filterFantasy.addEventListener("click",()=>{
  console.log("classic filter worked")
  const filteredBooks = booksData.filter(book => book.category === "Fantasy");
  bookDisplay(filteredBooks)
})

/*********************  Filter for Mystery Category    **********************/

filterMystery.addEventListener("click",()=>{
  console.log("classic filter worked")
  const filteredBooks = booksData.filter(book => book.category === "Mystery");
  bookDisplay(filteredBooks)
})




//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

searchByButton.addEventListener("click",async()=>{

  const category = searchBySelect.value
  const searchItem = searchByInput.value.trim()

  if(category==="title"){
    const filteredBooks = booksData.filter(book => book.title.toLowerCase().includes(searchItem.toLowerCase()))
    bookDisplay(filteredBooks)
  }else if(category==="author"){
    const filteredBooks = booksData.filter(book => book.author.toLowerCase().includes(searchItem.toLowerCase()))
    bookDisplay(filteredBooks)
  }

})









const getData =async()=>{
  try{
    let res = await fetch (bookURL)
    let data = await res.json()
    booksData=data;
    console.log(data)
    bookDisplay(data)
  }catch(err){
    console.log(err);
  }
}
getData()


// Delete Book ---- Delete

async function deleteBook(bookId){
  
  const response = await fetch(`${bookURL}/${bookId}`,{
    method : "DELETE",
   });
   const result = await response.json();
   getData()
}

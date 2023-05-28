# 🏫 Library Management System 📚
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate
- Navigate to the correct path


```
npm install --engine-strict
```
## Start only the Backend server
```
npm run server
```
## Start only Frontend server
```
npm run start
```
## Start both BE & FE in a single command
```
npm run watch
```
# Important files

├── index.html
├── scripts
│   └── index.js
└── styles
    └── style.css


On page `load`, a list of all `books`

<img src="https://user-images.githubusercontent.com/101581634/234861038-20358f44-6ffd-42a8-b555-08f1784c692d.png" width="100%"/>

 markup (example single card div inside card-list div): 
<!-- ![bookMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/234864812-5663b933-95a5-408a-835e-06a5cc67d813.png" width="100%"/>


UI (example card):
<!-- ![bookUI]() -->
<img src="https://user-images.githubusercontent.com/101581634/235060554-78287a66-75ee-4c10-8365-c3d44864a19e.png" width="100%"/>

Data mapping:
<!-- ![dataMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/235060568-d8b51431-11e8-45ac-866c-c2cb9dae3d9f.png" width="100%"/>


- The books  shown on page `load`

### Ability to add new Books [2]
<!-- ![add book ] -->
<img src="https://user-images.githubusercontent.com/101581634/235060588-2499d6c6-4f61-4a25-97ed-fdd18fa677ed.png" width="100%"/>


the page  not reload
the list update

<!-- ![added book UI]() -->
<img src="https://user-images.githubusercontent.com/101581634/234911011-33340c63-6387-4826-a4f1-cce636f9b710.png" width="100%"/>

### Ability to delete a Book [2]
- In each book, the card adds a button `Delete` with `button.card-button` on clicking this button particular book  removed from DOM as well as `db.json`.

- 'DELETE' request 
the page will not be reload
the list will be updated

###  Ability to update all the fields of a book 

- Able to populate the following input on edit link click.
- added an event listener with ```click``` to anchor tag with  use preventDefault.
- The page will not re-load on the click of the EDIT link 



<img src="https://user-images.githubusercontent.com/101581634/235060572-a3de7f7c-c9ef-48a0-af24-90880a463121.png" width="100%"/>

- make a 'PATCH' request  to updated *title , image ,author ,category and price*


### Ability to update only the Price 

- Able to populate the following input on edit link click.
-  will be populated with the `id` of the book
- will be populated with the `price` of the book

- Once the edit inputs are populated, if the user clicks `#update-price-book` button. 
- the price of that particular book should update based on the value entered in the `#update-price-book-price`. 
- The price of the book in the list should update without any page *reloads*.

- make a 'PATCH' request 

### Sorting Books Based on Price 
- Sorting for `Low to High` UI:
<!-- ![sort Low to high] -->
<img src="https://user-images.githubusercontent.com/101581634/235060584-78f67972-8ccb-4728-aa26-015c0e398e01.png" width="100%"/>

With the click of the button `#sort-low-to-high`, the book list will be sorted in ascending order based on their *price*.

With the click of the button `#sort-high-to-low`, the book list will be sorted in descending order based on their *price*.

###  Filtering Books based on the category
I have  create three types of filters as
 1. ***Classic***
 2. ***Fantasy***
 3. ***Mystery***
- Filtering for `Fantasy` UI:
<!-- ![filter fantacy] -->
<img src="https://user-images.githubusercontent.com/101581634/235060576-71febb24-2776-48bd-baa3-820340337bf8.png" width="100%"/>

When the button `#filter-Classic` is clicked, the book list is filtered. It will be only show the books whose `category` is ***`Classic`***.

When the button `#filter-Fantasy` is clicked, the book list filtered. It will be only show the books whose `category` is ***`Fantasy`***.

When the button `#filter-Mystery` is clicked, the book list is  filtered. It will  show the books whose `category` is ***`Mystery`***.


###  Search by title/author 
- To implement search functionality on top there is a select tag with *options* as to search by category  
 1. ***`title`***
 2. ***`author`***
<!-- ![search by title] -->
<img src="https://user-images.githubusercontent.com/101581634/235060578-5d444e0f-9d97-4ac0-bca4-cafe1688b39a.png" width="100%"/>

first select(`select#search-by-select`) category and then type input (`input#search-by-input`) value for `title name` / `author name` and apply to `booksData` on click of search button(`button#search-by-button`).



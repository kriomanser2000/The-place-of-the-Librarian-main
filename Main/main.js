var books = [];
var users = [];
var cards = [];
function changeContent(option) 
{
    var contentDiv = document.getElementById('content');
    switch (option) 
    {
        case 1:
            contentDiv.innerHTML = `
            <div class="containMain">
            <h1 style="position: absolute; left: 265px; top: 40px;">All Books:</h1>
            <button style="top: 60px; width: 150px;" onclick="openNewBook()">New Book</button>
        </div>
        <hr style="right: 10px;">
        <div class="container">
            <p style="position: absolute; bottom: 745px; left: 265px; font-size: 22px;">Sort by:</p>
            <select id="bookCombo">
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="author">Author</option>
                <option value="year">Year</option>
                <option value="publisher">Publisher</option>
                <option value="pages">Pages</option>
                <option value="count">Count</option>
            </select>
            <button style="position: absolute; left: 460px; height: 30px; bottom: 765px; width: 65px; font-size: 18px;" id="sortBookBtn" onclick="sortBookTable()">Sort</button>
            <p style="position: absolute; left: 1520px; bottom: 745px; font-size: 22px;">Search:</p>
            <input type="text" id="searchInputBook" placeholder="Search">
            <button style="position: absolute; left: 1820px; height: 35px; bottom: 760px; width: 80px; font-size: 18px;" id="searchBtnBook">Search</button>
            <table id="bookTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Publisher</th>
                        <th>Pages</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>`;
            setTimeout(fillBookTable, 0);
            break;
        case 2:
            contentDiv.innerHTML = `
            <div class="containMain">
            <h1 style="position: absolute; left: 265px; top: 40px;">All Visitors:</h1>
            <button style="top: 60px; width: 150px;" onclick="openNewUser()">New Visitor</button>
        </div>
        <hr style="right: 10px;">
        <div class="container">
            <p style="position: absolute; bottom: 745px; left: 265px; font-size: 22px;">Sort by:</p>
            <select id="userCombo">
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="phone">Phone</option>
            </select>
            <button style="position: absolute; left: 435px; height: 30px; bottom: 765px; width: 65px; font-size: 18px;" id="userSortBtn" onclick="sortUserTable()">Sort</button>
            <p style="position: absolute; left: 1520px; bottom: 745px; font-size: 22px;">Search:</p>
            <input type="text" id="searchInputUser" placeholder="Search">
            <button style="position: absolute; left: 1820px; height: 35px; bottom: 760px; width: 80px; font-size: 18px;" id="userSearchBtn">Search</button>
            <table id="userTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>`;
    setTimeout(fillUserTable, 0);
            setTimeout(fillBookTable, 0);
            break;
        case 3:
            contentDiv.innerHTML = `<div class="containMain">
            <h1 style="position: absolute; left: 265px; top: 40px;">All Cards:</h1>
            <button style="top: 60px; width: 150px;" onclick="openNewCard()">New Card</button>
        </div>
        <hr style="right: 10px;">
        <div class="container">
            <p style="position: absolute; bottom: 745px; left: 265px; font-size: 22px;">Sort by:</p>
            <select id="cardCombo">
                <option value="id">ID</option>
                <option value="visitor">Visitor</option>
                <option value="book">Book</option>
                <option value="borrowDate">Borrow Date</option>
                <option value="returnDate">Return Date</option>
            </select>
            <button style="position: absolute; left: 485px; height: 30px; bottom: 765px; width: 65px; font-size: 18px;" id="sortCardBtn" onclick="sortCardTable()">Sort</button>
            <p style="position: absolute; left: 1520px; bottom: 745px; font-size: 22px;">Search:</p>
            <input type="text" id="searchInputCard" placeholder="Search">
            <button style="position: absolute; left: 1820px; height: 35px; bottom: 760px; width: 80px; font-size: 18px;" id="searchBtnCard">Search</button>
            <table id="cardTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Visitor</th>
                        <th>Book</th>
                        <th>Borrow Date</th>
                        <th>Return Date</th>                        
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>`;
            break;
        case 4:
            contentDiv.innerHTML = "<h1>CONTENT HERE STATS 4</h1><p>CONTENT HERE FOR 4.</p>";
            break;
        default:
            contentDiv.innerHTML = "<h1>CONTENT HERE</h1><p>CONTENT HERE CAN CHANGE.</p>";
    }
}
function openNewUser() 
{
    var modal = document.getElementById('newUser');
    if (modal) modal.style.display = 'block';
}
function closeNewUser() 
{
    var modal = document.getElementById('newUser');
    modal.style.display = 'none';
}
function addNewUser() 
{
    const name = document.getElementById('userNameInput').value;
    const phone = document.getElementById('userPhoneInput').value;
    const newUser = 
    {
        id: users.length + 1,
        name,
        phone
    };
    users.push(newUser);
    fillUserTable();
    saveUsersToLocalStorage();
    closeNewUser();
    document.getElementById('userNameInput').value = '';
    document.getElementById('userPhoneInput').value = '';
}
function saveUsersToLocalStorage() 
{
    localStorage.setItem('users', JSON.stringify(users));
}
function loadUsersFromLocalStorage() 
{
    var storedUsers = localStorage.getItem('users');
    if (storedUsers) 
    {
        users = JSON.parse(storedUsers);
    } 
    else 
    {
        users = [];
    }
}
function openNewBook() 
{
    var modal = document.getElementById('newBook');
    modal.style.display = 'block';
}
function closeNewBook() 
{
    var modal = document.getElementById('newBook');
    modal.style.display = 'none';
}
function editBook(bookId) 
{
    openEditBook(bookId);
}
function addNewBook() 
{
    const name = document.getElementById('bookNameInput').value;
    const author = document.getElementById('bookAuthorInput').value;
    const year = document.getElementById('bookYearInput').value;
    const publisher = document.getElementById('bookPublisherInput').value;
    const pages = document.getElementById('bookPagesInput').value;
    const count = document.getElementById('bookCountInput').value;
    const newBook = 
    {
        id: books.length + 1,
        name,
        author,
        year,
        publisher,
        pages,
        count
    };
    books.push(newBook);
    fillBookTable();
    saveBooksToLocalStorage();
    closeNewBook();
    document.getElementById('bookNameInput').value = '';
    document.getElementById('bookAuthorInput').value = '';
    document.getElementById('bookYearInput').value = '';
    document.getElementById('bookPublisherInput').value = '';
    document.getElementById('bookPagesInput').value = '';
    document.getElementById('bookCountInput').value = '';
}
function saveBooksToLocalStorage() 
{
    localStorage.setItem('books', JSON.stringify(books));
}
function loadBooksFromLocalStorage() 
{
    var storedBooks = localStorage.getItem('books');
    if (storedBooks) 
    {
        books = JSON.parse(storedBooks);
    } 
    else 
    {
        books = [];
    }
}
function openNewCard() 
{
    var modal = document.getElementById('newCard');
    modal.style.display = 'block';
}
function closeNewCard() 
{
    var modal = document.getElementById('newCard');
    modal.style.display = 'none';
}
function addNewCard() 
{
    const visitor = document.getElementById('cardVisitorInput').value;
    const book = document.getElementById('cardBookInput').value;
    const borrowDate = document.getElementById('cardBorrowDateInput').value;
    const returnDate = document.getElementById('cardReturnDateInput').value;
    const newCard = 
    {
        id: cards.length + 1,
        visitor,
        book,
        borrowDate,
        returnDate
    };
    cards.push(newCard);
    fillCardTable();
    saveCardsToLocalStorage();
    closeNewCard();
    document.getElementById('cardVisitorInput').value = '';
    document.getElementById('cardBookInput').value = '';
    document.getElementById('cardBorrowDateInput').value = '';
    document.getElementById('cardReturnDateInput').value = '';
}
function saveCardsToLocalStorage() 
{
    localStorage.setItem('cards', JSON.stringify(cards));
}
function loadCardsFromLocalStorage() 
{
    const storedCards = localStorage.getItem('cards');
    if (storedCards) 
    {
        cards = JSON.parse(storedCards);
    } 
    else 
    {
        cards = [];
    }
}
function searchBooks() 
{
    const searchTerm = document.getElementById('searchInputBook').value.toLowerCase();
    const filteredBooks = books.filter(book => Object.values(book).some(value => String(value).toLowerCase().includes(searchTerm)));
    fillBookTable(filteredBooks);
}
function searchUsers() 
{
    const searchTerm = document.getElementById('searchInputUser').value.toLowerCase();
    const filteredUsers = users.filter(user => Object.values(user).some(value => String(value).toLowerCase().includes(searchTerm)));
    fillUserTable(filteredUsers);
}
function fillBookTable(booksToDisplay = books)
{
    const tableBody = document.querySelector('#bookTable tbody');
    if (tableBody) 
    {
        tableBody.innerHTML = '';
        booksToDisplay.forEach(book => 
        {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
                <td>${book.publisher}</td>
                <td>${book.pages}</td>
                <td>${book.count}</td>
                <td><button onclick="editBook(${book.id})">Edit</button></td>`;
            tableBody.appendChild(row);
        });
    } 
    else 
    {
        console.error('Table body for books not found on the page');
    }
}
function fillUserTable(usersToDisplay = users) 
{
    const tableBody = document.querySelector('#userTable tbody');
    if (tableBody) 
    {
        tableBody.innerHTML = '';
        usersToDisplay.forEach(user => 
        {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td><button onclick="editUser(${user.id})">Edit</button></td>`;
            tableBody.appendChild(row);
        });
    } 
    else 
    {
        console.error('Table body for users not found on the page');
    }
}
function fillCardTable(cardsToDisplay = cards) 
{
    const tableBody = document.querySelector('#cardTable tbody');
    if (tableBody) 
    {
        tableBody.innerHTML = '';
        cardsToDisplay.forEach(card => 
        {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${card.id}</td>
                <td>${card.visitor}</td>
                <td>${card.book}</td>
                <td>${card.borrowDate}</td>
                <td>${card.returnDate}</td>
                <td><button onclick="editCard(${card.id})">Edit</button></td>`;
            tableBody.appendChild(row);
        });
    } 
    else 
    {
        console.error('Table body for cards not found on the page');
    }
}
document.getElementById('searchBtnBook').addEventListener('click', searchBooks);
document.getElementById('userSearchBtn').addEventListener('click', searchUsers);
document.getElementById('searchBtnCard').addEventListener('click', searchCards);
document.addEventListener('DOMContentLoaded', function() 
{
    loadUsersFromLocalStorage();
    loadBooksFromLocalStorage();
    loadCardsFromLocalStorage();
    var userTable = document.getElementById('userTable');
    var bookTable = document.getElementById('bookTable');
    var cardTable = document.getElementById('cardTable');
    if (userTable && bookTable && cardTable) 
    {
        fillUserTable();
        fillBookTable();
        fillCardTable();
    } 
    else 
    {
        console.error('Tables not found on the page');
    }
    var searchBtnBook = document.getElementById('searchBtnBook');
    var userSearchBtn = document.getElementById('userSearchBtn');
    var searchBtnCard = document.getElementById('searchBtnCard');
    if (searchBtnBook) 
    {
        searchBtnBook.addEventListener('click', searchBooks);
    } 
    else 
    {
        console.error('Search button for books not found on the page');
    }
    if (userSearchBtn) 
    {
        userSearchBtn.addEventListener('click', searchUsers);
    } 
    else 
    {
        console.error('Search button for users not found on the page');
    }
    if (searchBtnCard) 
    {
        searchBtnCard.addEventListener('click', searchCards);
    } 
    else 
    {
        console.error('Search button for cards not found on the page');
    }
});
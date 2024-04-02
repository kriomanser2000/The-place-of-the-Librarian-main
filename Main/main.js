var books = [];
var users = [];
function changeContent(option) 
{
    var contentDiv = document.getElementById('content');
    switch (option) 
    {
        case 1:
            contentDiv.innerHTML = `
            <div class="containMain">
            <h1 style="position: absolute; left: 265px; top: 40px;">Всі книги:</h1>
            <button style="top: 60px;" onclick="openNewBook()">Нова книга</button>
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
            <h1 style="position: absolute; left: 265px; top: 40px;">Всі користувачі:</h1>
            <button style="top: 60px;" onclick="openNewUser()">Новий користувач</button>
        </div>
        <hr style="right: 10px;">
        <div class="container">
            <p style="position: absolute; bottom: 745px; left: 265px; font-size: 22px;">Sort by:</p>
            <select id="userCombo">
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="phone">Phone</option>
            </select>
            <button style="position: absolute; left: 440px; height: 30px; bottom: 765px; width: 65px; font-size: 18px;" id="userSortBtn" onclick="sortUserTable()">Sort</button>
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
            contentDiv.innerHTML = "<h1>CONTENT HERE CARDS 3</h1><p>CONTENT HERE FOR 3.</p>";
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
    modal.style.display = 'block';
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
}
function openEditUser(userId) 
{
    var user = users.find(function(item) 
    {
        return item.id === userId;
    });
    document.getElementById('userNameInputEdit').value = user.name;
    document.getElementById('userPhoneInputEdit').value = user.phone;
    document.getElementById('saveUserBtnEdit').dataset.userId = userId;
    document.getElementById('deleteUserBtnEdit').dataset.userId = userId;
    var modal = document.getElementById('editUser');
    modal.style.display = 'block';
}
function closeEditUser() 
{
    var modal = document.getElementById('editUser');
    modal.style.display = 'none';
}
function saveEditedUser() 
{
    var userId = document.getElementById('saveUserBtnEdit').dataset.userId;
    var name = document.getElementById('userNameInputEdit').value;
    var phone = document.getElementById('userPhoneInputEdit').value;
    users.forEach(function(user) 
    {
        if (user.id === parseInt(userId)) 
        {
            user.name = name;
            user.phone = phone;
        }
    });
    fillUserTable();
    saveUsersToLocalStorage();
    closeEditUser();
}
function deleteUserFromEdit(button) 
{
    var userId = button.dataset.userId;
    deleteUser(parseInt(userId));
    closeEditUser();
}
function deleteUser(userId) 
{
    users = users.filter(function(item) 
    {
        return item.id !== userId;
    });
    fillUserTable();
    saveUsersToLocalStorage();
}
function editUser(userId) 
{
    openEditUser(userId);
}
loadUsersFromLocalStorage();
document.addEventListener('DOMContentLoaded', function() 
{
    loadUsersFromLocalStorage();
    fillBookTable();
    fillUserTable();
});
loadUsersFromLocalStorage();
document.addEventListener('DOMContentLoaded', function() 
{
    loadUsersFromLocalStorage();
    fillBookTable();
    fillUserTable();
});
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
    var book = books.find(function(item) 
    {
        return item.id === bookId;
    });
    document.getElementById('bookNameInput').value = book.name;
    document.getElementById('bookAuthorInput').value = book.author;
    document.getElementById('bookYearInput').value = book.year;
    document.getElementById('bookPublisherInput').value = book.publisher;
    document.getElementById('bookPagesInput').value = book.pages;
    document.getElementById('bookCountInput').value = book.count;
    document.getElementById('saveBookBtn').dataset.bookId = bookId;
    openNewBook();
}
function deleteBook(bookId) 
{
    books = books.filter(function(item) 
    {
        return item.id !== bookId;
    });
    fillBookTable();
    saveBooksToLocalStorage();
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
}
function saveBook() 
{
    var bookId = document.getElementById('saveBookBtn').dataset.bookId;
    var name = document.getElementById('bookNameInput').value;
    var author = document.getElementById('bookAuthorInput').value;
    var year = document.getElementById('bookYearInput').value;
    var publisher = document.getElementById('bookPublisherInput').value;
    var pages = document.getElementById('bookPagesInput').value;
    var count = document.getElementById('bookCountInput').value;
    books.forEach(function(book) 
    {
        if (book.id === parseInt(bookId)) 
        {
            book.name = name;
            book.author = author;
            book.year = year;
            book.publisher = publisher;
            book.pages = pages;
            book.count = count;
        }
    });
    fillBookTable();
    saveBooksToLocalStorage();
    closeNewBook();
}
loadBooksFromLocalStorage();
document.addEventListener('DOMContentLoaded', function() 
{
    loadBooksFromLocalStorage();
    fillBookTable();
});
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
function openEditBook(bookId) 
{
    var book = books.find(function(item) 
    {
      return item.id === bookId;
    });
    document.getElementById('bookNameInputEdit').value = book.name;
    document.getElementById('bookAuthorInputEdit').value = book.author;
    document.getElementById('bookYearInputEdit').value = book.year;
    document.getElementById('bookPublisherInputEdit').value = book.publisher;
    document.getElementById('bookPagesInputEdit').value = book.pages;
    document.getElementById('bookCountInputEdit').value = book.count;
    document.getElementById('saveBookBtnEdit').dataset.bookId = bookId;
    document.getElementById('deleteBookBtnEdit').dataset.bookId = bookId;
    var modal = document.getElementById('editBook');
    modal.style.display = 'block';
}
function deleteBookFromEdit(button) 
{
    var bookId = button.dataset.bookId;
    deleteBook(parseInt(bookId));
    closeEditBook();
}
function saveEditedBook()
{
    var bookId = document.getElementById('saveBookBtnEdit').dataset.bookId;
    var name = document.getElementById('bookNameInputEdit').value;
    var author = document.getElementById('bookAuthorInputEdit').value;
    var year = document.getElementById('bookYearInputEdit').value;
    var publisher = document.getElementById('bookPublisherInputEdit').value;
    var pages = document.getElementById('bookPagesInputEdit').value;
    var count = document.getElementById('bookCountInputEdit').value;
    books.forEach(function(book) 
    {
      if (book.id === parseInt(bookId)) 
      {
        book.name = name;
        book.author = author;
        book.year = year;
        book.publisher = publisher;
        book.pages = pages;
        book.count = count;
      }
    }); 
    fillBookTable();
    saveBooksToLocalStorage();
    closeEditBook();
}
function closeEditBook() 
{
    var modal = document.getElementById('editBook');
    modal.style.display = 'none';
}
function sortBookTable() 
{
    const sortBy = document.getElementById('bookCombo').value;
    books.sort((a, b) => 
    {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });
    fillBookTable();
}
function sortUserTable() 
{
    const sortBy = document.getElementById('userCombo').value;
    users.sort((a, b) => 
    {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });
    fillUserTable();
}
loadUsersFromLocalStorage();
document.addEventListener('DOMContentLoaded', function() 
{
    loadUsersFromLocalStorage();
    fillBookTable();
    fillUserTable();
});
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
function fillUserTable(usersToDisplay = users) 
{
    const tableBody = document.querySelector('#userTable tbody');
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
document.getElementById('searchBtnBook').addEventListener('click', searchBooks);
document.getElementById('userSearchBtn').addEventListener('click', searchUsers);
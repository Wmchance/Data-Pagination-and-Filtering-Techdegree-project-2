/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Search Bar
Here the new elements for the Serach Bar are created and appended to the DOM
*/

const header = document.querySelector('.header'); 

const newLabel = document.createElement('label');
newLabel.className = 'student-search'; 

const newSpan = document.createElement('span');
newLabel.appendChild(newSpan);

const newInput = document.createElement('input');
newInput.id = 'search';
newInput.placeholder = 'Search by name...';
newInput.type = 'text';
newLabel.appendChild(newInput);

// Button element - created and appended
const newBtn = document.createElement('button');
newBtn.type = 'button';

   const newImg = document.createElement('img');
   newImg.src = "img/icn-search.svg";
   newImg.alt = "Search icon"; 
   newBtn.append(newImg);

newLabel.appendChild(newBtn);

header.appendChild(newLabel); 

/*
Search function
Here the functionality for the Serach Bar is added
*/

const submit = document.querySelector('button');
const newMessage = document.createElement('p');

//on 'click' event
submit.addEventListener ('click', (e) => {

   e.preventDefault();

   const searchInput = newInput.value;
   newInput.value = '';
   let newList = [];

   //Function to compare searched value to name values in the data array
   for (let i=0; i<data.length; i++) {
      const firstName = data[i].name.first.toLowerCase();
      const lastName = data[i].name.last.toLowerCase();

      if (searchInput.value != 0 && (firstName.includes(searchInput.toLowerCase()) || lastName.includes(searchInput.toLowerCase()))) {
         newList.push(data[i]);
      }
   }

   //Set conditions and display for when no matches are found
   if(newList.length === 0) {
      newMessage.textContent = 'No results found';
      document.querySelector('div').appendChild(newMessage); 
   }

   if(newList.length !== 0) {
      newMessage.textContent = '';
      document.querySelector('div').appendChild(newMessage); 
   }

   showPage(newList, 1);
   addPagination(newList);

}) 

newMessage.textContent = ''; 

//'keyup' event
newInput.addEventListener ('keyup', () => {

   const searchInput = newInput.value;
   let newList = [];

   //Function to compare searched value to name values in the data array
   for (let i=0; i<data.length; i++) {
      const firstName = data[i].name.first.toLowerCase();
      const lastName = data[i].name.last.toLowerCase();

      if (searchInput.value != 0 && (firstName.includes(searchInput.toLowerCase()) || lastName.includes(searchInput.toLowerCase()))) {
         newList.push(data[i]);
      }
   }

   //Set conditions and display for when no matches are found
   if(newList.length === 0) {
      newMessage.textContent = 'No results found';
      document.querySelector('div').appendChild(newMessage); 
   }

   if(newList.length !== 0) {
      newMessage.textContent = '';
      document.querySelector('div').appendChild(newMessage); 
   }
   
   showPage(newList, 1);
   addPagination(newList);

}) 

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const itemsPerPage = 9; 

function showPage (list, page) {

   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage; 
   
   const studentList = document.querySelector('.student-list'); 
   studentList.innerHTML = '';

   /*
   Creates the elements to display the selected information from each data object
   Elements are created based on the start & end index - for loop runs over entire data array, but only objs within the set index are displayed
   */
   for (let i=0; i<list.length; i++) {
      if (i>=startIndex && i<endIndex) {
         const newLI = document.createElement('li'); 
         newLI.className = "student-item cf"; 

         const newDiv = document.createElement('div');
         newDiv.className = "student-details"; 
         newLI.appendChild(newDiv); 

         const newImg = document.createElement('img');
         newImg.className = "avatar";
         newImg.src = list[i].picture.large; 
         newDiv.appendChild(newImg);

         const newH3 = document.createElement('h3');
         newH3.textContent = `${list[i].name.first} ${list[i].name.last}`; 
         newDiv.appendChild(newH3);

         const newSpan = document.createElement('span');
         newSpan.className = "email";
         newSpan.textContent = list[i].email; 
         newDiv.appendChild(newSpan);

         const newDiv2 = document.createElement('div');
         newDiv2.className = "joined-details"; 
         newLI.appendChild(newDiv2); 

         const newSpan2 = document.createElement('span');
         newSpan2.className = "date";
         newSpan2.textContent = `Joined ${list[i].registered.date}`; 
         newDiv2.appendChild(newSpan2);

         studentList.appendChild(newLI);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   const numOfPages = Math.ceil(list.length / itemsPerPage); 
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   //Creates button elements for each page
   for(let i=1; i<numOfPages+1; i++){

      const newLI = document.createElement('li'); 

      const newBtn = document.createElement('button');
      newBtn.type = 'button';
      newBtn.innerText = `${i}`; 
      newLI.appendChild(newBtn);

      linkList.appendChild(newLI);

      document.querySelectorAll('button')[1].className = 'active';

      /*
      Sets event function to call to 'showPage' function with the button number passed as the 'page' argument
      This has the displayed elements showen based on the start and end indexes associated with the button's page number
      This also sets the 'active' class to the clicked button element 
      */
      linkList.addEventListener('click', (e) => {
         if (e.target.tagName === 'BUTTON') {
            document.querySelector('.active').className = '';
            e.target.className = 'active'; 
            showPage(list, e.target.textContent); 
         }

      });
 
   }
}

// Call functions
showPage(data, 1);
addPagination(data);
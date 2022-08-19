/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



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



// Call functions

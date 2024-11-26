//async-> it is a function that return a promise; inside this we can use await keyword
//await pauses the execution of the func until the promise is resolved
//await keyword cannot be used anywhere outside async keyword


const fetcButton = document.getElementById('fetchButton');
const userList = document.getElementById('userList');


async function fetchUserdata() {
    try{
        //start fetching data from API 
        const response = await fetch('https://freetestapi.com/api/v1/students?limit=5  ');
        //check if the response is okay
        if(!response.ok){
            throw new Error('Failed to fetch data');
        }
        //parsing the response 
        const users = await response.json();

        userList.innerHTML='';
        users.forEach(user => { 
            const li = document.createElement('li');
            li.textContent =`${user.name} - ${user.age}`;
            userList.appendChild(li);
        });
        
    }catch(error){
        userList.innerHTML=`<li> Error :${error.message}<\li>`
    }
}
fetcButton.addEventListener('click' , fetchUserdata);
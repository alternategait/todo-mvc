const deleteBtn = document.querySelectorAll('.del') // establish a variable by selecting all items with class of del
const todoItem = document.querySelectorAll('span.not') // establish a variable by selecing all items that are span with class of not
const todoComplete = document.querySelectorAll('span.completed') // establish a variable by selecting all ittems that are span with class of complted

Array.from(deleteBtn).forEach((el)=>{ // make an array of all things with deleteBtn(line 1) then forEach loop use the element from the array
    el.addEventListener('click', deleteTodo) // use that ellement to have an event listener for a click calling deleteTodo (line 17)
})

Array.from(todoItem).forEach((el)=>{// make an array of all things with todoItem (line 2) then forEach loop use the element from the array
    el.addEventListener('click', markComplete) //use that element to have an event listener for a click calling markComplete (line 35)
})

Array.from(todoComplete).forEach((el)=>{// make an array of all things with deleteBtn(line 1) then forEach loop use the element from the array
    el.addEventListener('click', markIncomplete) //use that element to have an event listener for a click calling markIncomplete (line 53)
})

async function deleteTodo(){ //a promise syntax
    const todoId = this.parentNode.dataset.id // establish variable using the parent node of what was clicked find the dataset id (line 14 of todos ejs)
    try{
        const response = await fetch('todos/deleteTodo', { //  a fetch request to route todos delete Todo
            method: 'delete', // HTML method is delete
            headers: {'Content-type': 'application/json'}, // let it know it is sending JSON
            body: JSON.stringify({ // body will contain JSON string
                'todoIdFromJSFile': todoId // variable or key is todoIdFromJSFile (called line 47 of todos.js) with a value of what is determined at line 18
            })
        })
        const data = await response.json() // a response will come back as JSON
        console.log(data) // the response is data, console log that response 
        location.reload()//refresh at this page
    }catch(err){ // if there is an error
        console.log(err) // tell me the error in the console
    }
}

async function markComplete(){ // a promise syntax
    const todoId = this.parentNode.dataset.id // establish variable using the parent node of what was clicked find the dataset id (line 14 of todos ejs)
    try{
        const response = await fetch('todos/markComplete', { // fetch using route toodos/markComplete (todos.js line 22)
            method: 'put', // HTML method for update
            headers: {'Content-type': 'application/json'},// tell use that the information is sent as JSON
            body: JSON.stringify({ // body will contain JSON 
                'todoIdFromJSFile': todoId // variable or key is todoIdFromJSFile (called line 24 of todos.js) with a value of what is determined at line 36
            })
        })
        const data = await response.json() // receive a response in form of JSON
        console.log(data) // take the response and show it in the console
        location.reload() // reload this page
    }catch(err){ // if there is an error 
        console.log(err) // tell me the error in the console
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id //establish variable using the parent node of what was clicked find the dataset id (line 14 of todos ejs)
    try{
        const response = await fetch('todos/markIncomplete', { // use route todos/markIncomplete (todos.js line 33)
            method: 'put', // HTML method put is update
            headers: {'Content-type': 'application/json'}, // using JSON
            body: JSON.stringify({ // body will be JSON
                'todoIdFromJSFile': todoId // / variable or key is todoIdFromJSFile (called line 35 of todos.js) with a value of what is determined at line 54
            })
        })
        const data = await response.json() // receive a response that is JSON
        console.log(data) // take the response and show it in the console
        location.reload() // reload this page
    }catch(err){ // if there is an error
        console.log(err) // tell me the error in the console
    }
}
let users = JSON.parse(localStorage.getItem("users"));
const userId = JSON.parse(localStorage.getItem("userId"));
if (!users) localStorage.setItem("users", JSON.stringify([]));
if (!userId) localStorage.setItem("userId", JSON.stringify(1));
const render = (users)=>{
    const recordRef = document.getElementById("records");
    let body = "";
    for (let user of users)body += `<tr><td>${user.Id}</td>
    <td>${user.Name}</td>
    <td><button onclick="editEvent(${user.Id})">edit</button>
    <button onclick="deleteEvent(${user.Id})">delete</button></td>
  </tr>`;
    recordRef.innerHTML = body;
};
//delete
const deleteEvent = (id)=>{
    let newuser = JSON.parse(localStorage.getItem("users"));
    const index = users.findIndex((obj)=>obj.Id === id);
    newuser.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(newuser));
    render(newuser);
};
//edit
const editEvent = (id)=>{
    const usernameRef = document.getElementById("username");
    const addRef = document.getElementById("add");
    let newuser = JSON.parse(localStorage.getItem("users"));
    const index = newuser.findIndex((obj)=>obj.Id === id);
    // console.log(index);
    usernameRef.value = newuser[index].Name;
    addRef.addEventListener("click", ()=>{
        newuser[index] = {
            Id: id,
            Name: usernameRef.value
        };
        localStorage.setItem("users", JSON.stringify(newuser));
        render(newuser);
    });
};
//getting input
const addTodo = ()=>{
    const usernameRef = document.getElementById("username");
    let users = JSON.parse(localStorage.getItem("users"));
    let userId = JSON.parse(localStorage.getItem("userId"));
    // console.log("hai");
    users.push({
        Id: userId,
        Name: usernameRef.value
    });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userId", JSON.stringify(userId + 1));
    location.reload(); //explicit error
};
users = JSON.parse(localStorage.getItem("users"));
render(users);

//# sourceMappingURL=index.86da7ba5.js.map

let username;
const form = document.querySelector("form")
const input = document.querySelector("input")
const tb_body = document.querySelector("#tb_body")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    username = input.value;
    console.log(username);
    // tb_body.remove();
    if (input.value !== ""){
    async function getData(){
        let mylink = `https://api.github.com/users/${username}`
        const response = await fetch(mylink)
        const data = await response.json();
        console.log(data.avatar_url);
        if (data.message !== "Not Found"){
        tb_body.innerHTML =  `
        <td><img src="${data.avatar_url}" alt=""></td>
              <td>${data.name}</td>
              <td>${data.login}</td>
              <td>${data.location}</td>
              <td>${data.email}</td>
              <td>${data.followers}</td>`;}
        else{
            const eror = document.createElement("h3");
            eror.innerHTML = "Not Found"
            tb_body.append(eror);
        }
    }
    getData();
    }
    else{
        alert("Enter Username")
    }
})
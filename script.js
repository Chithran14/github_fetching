function request(){
    var username = document.getElementById('profile1').value;
    console.log(username)

    fetch(`https://api.github.com/users/${username}/repos`)
    .then(function(response){
        if(!response.ok){
            throw new Error("network error");
        }
        return response.json();
    })

    .then((response)=>{
            console.log(response)
            var result = document.getElementById('result');
            response.forEach(res => {
                result.innerHTML += `<a href="${res.html_url}">${res.name}</a><br>`
            });
        });
    }

async function request1(){
    var username = document.getElementById('profile').value;
    await fetch(`https://api.github.com/users/${username}`)
    .then(function(response){
        if(!response.ok){
            throw new Error("network error");
        }
        return response.json();
    })
    .then((response)=>{
        console.log(response)
        var result = document.getElementById('result1');
        result.innerHTML += `<div>
              <img src=${response.avatar_url} alt="loading" style="height:100px;width:100px;border-radius:100%;" /><br>
              <p>${response.login}</p> 
              <p>${response.id} </p>      
    </div>`
    });
}
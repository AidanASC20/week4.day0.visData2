const url = "https://randomuser.me/api";
fetch (url)
.then(function(response){
    return response.json();
}).then(function(myJson){
    let picture = (myJson.results[0].picture.large)
    let Honor = (myJson.results[0].name.title)
    let first = (myJson.results[0].name.first)
    let last =(myJson.results[0].name.last)
    let email =(myJson.results[0].email)
    let fullName = (Honor + ". " + first + " " + last);
    let country = (myJson.results[0].location.country)
    let streetN = (myJson.results[0].location.street.name)
    let streetNu = (myJson.results[0].location.street.name)
    let number = (myJson.results[0].phone)
    let Phone = document.createElement('h2');
    let newHead = document.createElement('h1');
    let Name = document.createElement('h2');
    let pictures = document.createElement('img');
    let adress = document.createElement('h2');
    let email_add = document.createElement('h2');
    



    newHead.innerText = country;
    Name.innerText = fullName;
    pictures.src = picture;
    adress.innerText = streetN + " " + streetNu;
    Phone.innerText = number;
    email_add.innerText = email;

    document.body.appendChild(pictures);
    document.body.appendChild(newHead);
    document.body.appendChild(Name);
    document.body.appendChild(adress);
    document.body.appendChild(Phone);
    document.body.appendChild(email_add);

    console.log(myJson);
});

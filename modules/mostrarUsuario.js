const user = document.querySelector('#user');


fetch("http://localhost:3000/users/listing")
.then(response=> response.json())
.then(datos =>{
    datos.forEach(element => {
       if(element.name == "andres")
       {
        user.innerHTML +=`<bond> ${element.name}`
       }
    });
})

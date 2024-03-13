const tablaPeople = document.querySelector("#tablaPeople")

fetch("http://localhost:3000/people/listing")
.then(response => response.json())
.then(datos=>{
    datos.forEach(element => {
        tablaPeople.innerHTML+=`
        <tr>
        <td><img src="/uploads/people/${element.photo}" alt="Foto de ${element.name}"></td>
            <td style="width:10pc; ">${element.name}</td>
            <td style="width:15pc; ">${element.lastname}</td>
            <td style="width:20pc; ">${element.nickname}</td>
            <td style="width:20pc; ">${element.email}</td>
            <td style="width:20pc; ">${element.type}</td>
       </tr>
        `
    });
})
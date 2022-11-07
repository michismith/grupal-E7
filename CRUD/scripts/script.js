
document.addEventListener('DOMContentLoaded', () => {



    document.getElementById('btnGet1').addEventListener('click', () => {
        let id = document.getElementById('inputGet1Id').value;
        if ( id > 0){
         fetch('https://6363e8578a3337d9a2ec1a2f.mockapi.io/users/'+id)
            .then(re => re.json())
            .then(data => {
                document.getElementById("results").innerHTML = data.id + "<br>" + data.name + "<br>" + data.lastname
                //* Debe decir ID ; 1  NAME ; Pepe
            })
        }else{
            fetch('https://6363e8578a3337d9a2ec1a2f.mockapi.io/users/')
                .then(re => re.json())
                .then(data => {
                    console.log(data)
             for (let i = 0; i < data.length; i++) {
                let info = data[i]
                document.getElementById("results").innerHTML += info.id + "<br>" + info.name + "<br>" + info.lastname + "<br> <br>";
              }
            })
        }
    })
})

document.getElementById('btnPost').addEventListener('click', ()=> {

    let nombre = document.getElementById("inputPostNombre").value;
    let apellido = document.getElementById("inputPostApellido").value;

    fetch('https://6363e8578a3337d9a2ec1a2f.mockapi.io/users/',{
        headers: {"Content-Type":"application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({
            name: nombre,
            lastname: apellido,
        })
    })
        .then(response => response.json())
        .then(data => {
            alert('Ingresado correctamente')
        })

});

document.getElementById('btnPut').addEventListener('click', ()=> {

    let nombre = document.getElementById("inputPostNombre").value;
    let apellido = document.getElementById("inputPostApellido").value;
    let idPut = document.getElementById('inputPutId').value;

    fetch('https://6363e8578a3337d9a2ec1a2f.mockapi.io/users/'+ idPut,{
        headers: {"Content-Type":"application/json; charset=utf-8"},
        method: 'PUT',
        body: JSON.stringify({
            name: nombre,
            lastname: apellido,
        })
    })
        .then(response => response.json())
        .then(data => {
            
        })

});


document.getElementById('btnPut').addEventListener('click', ()=> {

    let idDelete = document.getElementById('inputDelete')

    fetch('https://6363e8578a3337d9a2ec1a2f.mockapi.io/users/'+ idDelete,{
       
        method: 'DELETE',
       
    })
        .then(response => response.json())
        .then(data => {
            alert('Borrado correctamente')
        })

});

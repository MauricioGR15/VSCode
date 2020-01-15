// const aplicarDescuento = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let descuento = true;

//         if(descuento){
//             resolve('Descuento aplicado!');
//         }
//         else{
//             reject('No se puedo aplciar el descuento')
//         }
//     },3000);
// });

// aplicarDescuento.then(resultado => {
//     console.log(resultado);
// }).catch(error => {
//     console.log(error);
// })

//Promise con ajax
const descargaUsuarios = cantidad => new Promise((resolve,reject) => {
    //pasar la cantidad a la api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamado a Ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('GET',api,true);

    //on load
    xhr.onload = () => {
        if(xhr.status == 200){
            resolve(JSON.parse(xhr.responseText).results);
        }
        else{
            reject(Error(xhr.statusText));
        }
    }

    //opcional (on error)
    xhr.onerror = (error) => reject(error);


    //send
    xhr.send();
});

descargaUsuarios(15)
    .then(
        miembros => imprimir(miembros),
        error => console.error(new Error('Hubo un error' + error))
    )

function imprimir(usuarios){
    let html = '';
    usuarios.forEach(usuario => {
        html += `
        <li>
            Nombre: ${usuario.name.first} 
            País: ${usuario.nat}
            Imagen:
                <img src="${usuario.picture.medium}"><br>
        </li>`;
    });

    const cont = document.querySelector('#app');
    cont.innerHTML = html;
}
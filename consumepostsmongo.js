// la de angel rayo mi api key 50c5ea68e4b0a97d668bc84a
/// declaramos la url con la que trabajamos o la de aoi key fQJ18loW9DbBacFeit4xr1biROFiTxel de vistot , en mlab pinchado en user
const URL = "https://api.mlab.com/api/1/databases/bootcamp/collections/posts?apiKey=fQJ18loW9DbBacFeit4xr1biROFiTxel";
var response;
////var = 'mongodb://<dbuser>:<dbpassword>@ds013664.mlab.com:13664/bootcamp'
function obtenerPosts(){
//declaramos la peticion , eto sirve par ahacer la peticion a la url y necesito (ya que es asincrona)ç
// que quiero que haga cuando traiga los datos , tercerparametro false forma sincrono
  var peticion = new XMLHttpRequest();
 peticion.open("GET",URL,false);
 //quiero que me traigas en formato json, si se puede
 peticion.setRequestHeader("Content-Type","application/json");
 peticion.send();
 // var contador = 0 ;
 //do while (contador ==100) {
//  contador ++1
 //}
 //como le he puesto false sincrono debera enviarme la respesta
 response = JSON.parse(peticion.responseText);
 // para que cuando tenga un id concreto
 sessionStorage["posts"]=peticion.responseText;
 console.log(response);
 //mostrarPosts();
};
function mostrarPosts(){
var peticion = new XMLHttpRequest();
var tabla = document.getElementById("tablaPosts");
  for (var i = 0; i < response.length; i++) {
  ///  alert(response[i].titulo);
      var fila = tabla.insertRow(i+1);
      var celdaId = fila.insertCell(0)
      var celdaTitulo = fila.insertCell(1);
      var celdaTexto = fila.insertCell(2);
      var celdaAutor = fila.insertCell(3);
      // metemos los botones en la tabla
      var celdaOperaciones= fila.insertCell(4);
      celdaId.innerHTML = response[i]._id.$oid;
      celdaTitulo.innerHTML = response[i].titulo;
  //    if(response [i].autor != undefined() {
      celdaAutor.innerHTML = response[i].autor;
      celdaTexto.innerHTML = response[i].texto;
      celdaOperaciones.innerHTML = '<button onclick=\'actualizarPosts("' +
       celdaId.innerHTML + '")\';>Actualizar</button>';
  }
}
function anadirPosts(){
    var peticion = new XMLHttpRequest();
    peticion.open("POST",URL,false);
    peticion.setRequestHeader("Content-Type","application/json");
    peticion.send('{"titulo":"Nuevo POST desde victor", "texto":"Nuevo texto desde ATOM", "autor":{"nombre":"Fernando", "apellido":"Minguero"}}');
}
function actualizarPosts(id){
        var peticion = new XMLHttpRequest();
        var URLItem =  "https://api.mlab.com/api/1/databases/bootcamp/collections/posts/";
        URLItem += id;
        var APIKey = "?apiKey=fQJ18loW9DbBacFeit4xr1biROFiTxel";
        URLItem += APIKey;
        //usamos el put poro con otra url
        peticion.open("PUT",URLItem,false);
        peticion.setRequestHeader("Content-Type","application/json");
        peticion.send(' {"titulo":"hago PUT en el registro"}');

}
function seleccionarPosts(numero){
      sessionStorage["seleccionado"]=numero;

}
function buscarDetallesPost(numero) {
    var posts=JSON.parse(sessionStorage["posts"]);
    for (var i=0; i< posts.length ;i++) {
        if (posts[i]._id.$oid == numero)
       {
         //mostrar detalle
         document.getElementById("h1").innerHTML =numero;
         document.getElementById("h2").innerHTML =posts[i].titulo;
         document.getElementById("h3").innerHTML =posts[i].texto;
         break;
       }
    }
}

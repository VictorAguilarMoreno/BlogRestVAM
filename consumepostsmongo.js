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
 console.log(response);
 mostrarPosts();
};
function mostrarPosts(){
var tabla = document.getElementById("tablaPosts");
  for (var i = 0; i < response.length; i++) {
  ///  alert(response[i].titulo);
      var fila = tabla.insertRow(i+1);
      var celdaTitulo = fila.insertCell(0);
      var celdaTexto = fila.insertCell(1);
      var celdaAutor = fila.insertCell(2);
      celdaTitulo.innerHTML = response[i].titulo;
  //    if(response [i].autor != undefined() {
      celdaAutor.innerHTML = response[i].autor;
      celdaTexto.innerHTML = response[i].texto;

  }
}

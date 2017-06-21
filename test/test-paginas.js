// con esto uso las funciones de chai
var expect = require('chai').expect;
//para activa la busqueda dentro del html o xml
/// chaijquery = require('chai-jquery');
// como uso el http hago referencia al
var request = require('request');
// la insutrccion para que lance la prueba
it ('Test suma', function() {
  expect(9+4).to.equal(13);
  // prueba sincrona
});
//  request.get("http://www.forocoches.com",
  //                    function(error,response,body) {
    //                  expect(response.statusCode).to.equal(200);
    //                  done();
  //}) ;
  //prueba asincrona no se devuelve en el momento se pone done por convenio
  //cuando acabe llama al done
  // al hacer el request tomo una funcion que recupera el error , reponse y el body
describe ("Pruebas de Red",function() {
//asi agrupo los test en grupos
  it ('Test internet', function(done) {
      request.get("http://localhost:8081",
                          function(error,response,body) {
                            expect(response.statusCode).to.equal(200);
                            done();
     });
  });
  it ('Test internet', function(done) {
        request.get("http://localhost:8081",
                           function(error,response,body) {
                             expect(body).contains("<h1>Bien");
                             done();
    });
  });
});
///describe("Test jquery html",function () {
//jquery usar $() bsuca un string
// #identificador = <xxx ide=identificador"
//elemento = <elemento ....
//.clase = <xxx class="clase"...
// $("table#peeureba.clase1 tr") busca una tabla
  ////it ('Test H1', function(done) {
      ////  request.get("http://localhost:8081",
          ////                 function(error,response,body) {
              ///               expect($('body h1')).to.have.text("Bienvenido a mi blog");
                ///             done();
    /// });
  /// });
///});
//para lanzalo hay que ir al packege.json en script "testUniversidad": "mocha"
// o poner consola npm start , si hago lanzamientos a el contenedor debere poner en otra consola npm stat

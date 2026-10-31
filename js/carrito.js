

const albums = JSON.parse(localStorage.getItem("albums"));



buscartema();

function eliminarCarrito(idcancion){ 
   var count = JSON.parse(localStorage.getItem("cancionescarrito"));
    
count.splice(idcancion, 9999);

    localStorage.setItem("cancionescarrito", JSON.stringify(count)); 

 buscartema();
  
}

function reestablecerCarrito(){ 


    localStorage.setItem("cancionescarrito", JSON.stringify([0])); 
 buscartema();
  
}










function buscartema(){
     var idlist = JSON.parse(localStorage.getItem("cancionescarrito"));
    document.getElementById("mostrador").innerHTML = "";
      var busqueda;
    if (idlist.length == 1){
        document.getElementById("mostrador").innerHTML = "No hay items comprados todavia....";
         document.getElementById("continuarcompra").disabled = true;
    } else {
        document.getElementById("continuarcompra").disabled = false;
         idlist = JSON.parse(localStorage.getItem("cancionescarrito"));
            idlist.forEach(idx => {
               albums.forEach(album => {
                var canciones = album.songs;
                canciones.forEach(cancion => {
                    if (cancion.id == parseInt(idx)){
                        crearCancionesObjeto(album,cancion)
                    }       
                  
                });
            }); 

        });
    }
    
}


function cover(AlbumObj){
    
    var cover = document.createElement("img");
    cover.setAttribute("src", AlbumObj.cover);
    cover.setAttribute("alt", (AlbumObj.name + "- " + AlbumObj.artist + " - Portada de album"));
    cover.setAttribute("height","200px"); 
    cover.setAttribute("width","200px"); 
    cover.setAttribute("class", 'covercancionbuscar');
    return cover;
}



function crearCancionesObjeto(albumObj,songObj){


var Div = document.createElement('div');
       

        Div.setAttribute("class", "tracks_listados_buscar");
        
            
            var canciondentrodiv = document.createElement('div');
            canciondentrodiv.setAttribute("class", 'canciondentrodiv');

            canciondentrodiv.appendChild(cover(albumObj));
            

            var info = document.createElement("p");
                info.setAttribute("class", 'trackinfobuscar');
            info.innerHTML = (songObj.name + " <br /> " + albumObj.artist +" <br /> Duración: " + songObj.duration);
            canciondentrodiv.appendChild(info);

            var idboton = songObj.id;
            /*/ no funciona bien
            var btn = document.createElement("button");
                btn.setAttribute("class", 'trackinfoagregaralcarrito');
                btn.setAttribute("id", idboton);
                btn.setAttribute("style", "width: 120px; height: 80px");
                btn.setAttribute("onclick", "eliminarCarrito(" + songObj.id + ")")
                btn.innerHTML = "Eliminar del carrito";
            canciondentrodiv.appendChild(btn);
            /*/
            Div.appendChild(canciondentrodiv);


            var divmostrador = document.getElementById("mostrador");
                divmostrador.appendChild(Div);

         //document.body.appendChild(Div);
        }





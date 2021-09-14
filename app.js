const div = document.getElementById ("container");
const divInfo = document.getElementById ("infoContainer");
const opcionPerros = document.getElementById ("busqueda")
const boton = document.getElementById("botonEnviar");


const img = document.createElement ("P");
img.classList.add("imgPerrito");
const p = document.createElement ("P");
p.classList.add("infoPerrito");


//Fin asignacion variables





//Lista de nombres y caracteristicas

const array="Luna Nala Kira Lola Bimba Mia Noa Kiara Dana Gala Duna Bella Linda Maya Laika Nina Canela Trufa Coco Lua Lluna Frida Tina Mika Nana Tara Chispa Zoe Mía Rita Chanel Arya Chloe Pepa India Leia Olivia Cloe Greta Lia Uma Kala Ona Dama Shiva Perla Kyra Lili Mora Lula Hera Princesa Sasha Lana Kika Dora Xena Pipa Molly Zara Cora Nora Jara Candy Mel Samba Tana Estrella Aria Akira Dakota Roma Lulú Kora Jazz Sira Wendy Mini Cala Lucy Hanna Jade Maggie Mila Nuca Lara Blanca Iris Gaia Cleo Katy Layla Chiqui Shira Tula Danna Lúa Nena Lulu Nube Alfalfa Angus Aramis Archie Braco Carbón Crash Capitán Cash Doc Draco Dogo Elmer Ecko Eron Gizmo Garu Humo Joe Kai Kappy Khan Killer Keyto Lorenzo  Lester Lupy Mambo Merlín Neska Neo Oso Pinto Pirata Príncipe Raiser Ranger Rayo Rocco Ron Rufo Sago Sandu Sumo Tango Toribio Tristán Whisky Yako Yoyo África Alana Aika Bala Bola Cachita Canela Coca Daga Diva Dona Dulce Flopy Galleta Hada India Inka Jade Kía Keila Kala Lana Lola Mafi Manchas Mayka Negra Niebla Nata Nica Nube Oreja Onda Pachi Pelusa Puka Pecas Quinoa Randa Raya Sacha Shila Trufa Tormenta Uma Uva Vera Vainilla Vampi Zuri "

listaNombres= array.split(" ");

const array2 = "Jugueton Bueno Malo Travieso Ruidoso Timido Extrovertido Limpio Peleador Amigable Gloton Dormilon Sociable Dependiente Independiente Diurno Nocturno Protector Suavecito Fiel Amiguero Mordelon Sucio Vigilante Lider Celoso Activo Perezoso "

listaCaracter = array2.split(" ");





boton.addEventListener('click', (e) => {
    if(opcionPerros.value!=""){                             //Verifica que se elija una raza.
        e.preventDefault();
        API_URL = `https://dog.ceo/api/breed/${opcionPerros.value}/images/random`;
        fetch(`${API_URL}`)
            .then((Response) => Response.json())
                .then ((images)  => { 
                
                    img.innerHTML = `<img src="${images.message}">`;
                    p.innerHTML = `<b>Información del perro elegido:</b> <br>
                    <b>Nombre: </b> ${listaNombres[getRandomArbitrary(1,200)]} <br>
                    <b>Edad:</b> ${getRandomArbitrary(1,10)} años <br>
                    <b>Características: </b> ${listaCaracter[getRandomArbitrary(0,27)]} <br>
                    <b>Peso: </b> ${getRandomArbitrary(1,15)} kgs   <br>`

                    divInfo.appendChild(img);
                    divInfo.appendChild(p);
                    
            });
        }
    else{
        e.preventDefault();
        opcionPerros.setAttribute("placeholder","¡Eligeme aqui!")
    }
});

function getRandomArbitrary(min, max) {                           //Genera un numero al azar entre el min y max.
    return Math.round(Math.random() * (max - min) + min);
  }











           
          
            
      


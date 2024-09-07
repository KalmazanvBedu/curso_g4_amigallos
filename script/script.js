var boton = document.getElementsByClassName("button");

var boton_id = document.getElementById("button-3")

var produc_name = "Pantalón Cholo";

// console.log(boton);

// console.log(boton_id);

// boton_id.addEventListener("click", () => {
//     var tarjeta = document.querySelector(".tarjeta-producto-uno");

//     var textoElemento = tarjeta.querySelector(".titulo-producto").innerText;
//     var codigoElemento = tarjeta.querySelector(".codigo-producto").innerText;

//     alert("El nombre del producto es " + textoElemento + " y el código de producto es: " + codigoElemento);
// });


    // dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    // dataLayer.push({
    //   event: "add_to_cart",
    //   ecommerce: {
    //     currency: "USD",
    //     value: 30.03,
    //     items: [
    //     {
    //       item_id: "12345",
    //       item_name: produc_name,
    //       affiliation: "Galloshop",
    //       coupon: "Galliza",
    //       discount: 2.5,
    //       index: 0,
    //       item_brand: "Levis",
    //       item_category: "Pantalón",
    //       item_category2: "Adult",
    //       item_category3: "Mezclilla",
    //       item_category4: "Crew",
    //       item_category5: "Short sleeve",
    //       item_list_id: "related_products",
    //       item_list_name: "Related Products",
    //       item_variant: "green",
    //       location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
    //       price: 500,
    //       quantity: 1
    //     }
    //     ]
    //   }
    // });

    const botones = document.querySelectorAll("div[class='contenedor-botones'] button");

    var longitudArregglo = botones.length;

    for(let i = 0; i < longitudArregglo; i++) {
        let boton = botones[i];
        let idBoton = boton.getAttribute("id");
        
        boton.addEventListener("click", (e) => {
            if(idBoton === e.target.id) {
                alert(e.target.id)
            }
        });
    }




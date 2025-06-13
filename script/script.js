var contador = 1;

const menu_option_1 = document.getElementById("menu-option-1");

menu_option_1.addEventListener("click", () => {

    dataLayer.push({
        event: 'menu_option_click',
        option_menu: "1"
    })

});
 
 const botones = document.querySelectorAll("div[class='contenedor-botones'] button");

    var longitudArregglo = botones.length;

    for(let i = 0; i < longitudArregglo; i++) {
        let boton = botones[i];
        let idBoton = boton.getAttribute("id");
        
        boton.addEventListener("click", (e) => {
            if(idBoton === e.target.id) {

                const productName = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedor-caracteristicas']").querySelector("h2[class*='titulo-producto']").innerText;
                const productCode = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedor-caracteristicas']").querySelector("span[class*='codigo-producto']").innerText;
                const productPrice = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class*='contenedor-caracteristicas']").querySelector("span[class*='precio-producto']").innerText;        
                const productPriceNumber = parseInt(productPrice);

                if(boton.innerText === "Add") {

                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.

                dataLayer.push({
                    event: "add_to_cart",
                    ecommerce: {
                    currency: "USD",
                        items: [
                            {
                            item_id: productCode,
                            item_name: productName,
                            price: productPriceNumber,
                            }
                                ]
                            }
                        });

                }

                if(boton.innerText === "Remove") {

                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    
                    dataLayer.push({
                        event: "remove_from_cart",
                        ecommerce: {
                        currency: "USD",
                            items: [
                                {
                                item_id: productCode,
                                item_name: productName,
                                price: productPriceNumber,
                                }
                                    ]
                                }
                            });
    
                    }

                    if(boton.innerText === "Payment") {

                        dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        
                        dataLayer.push({
                            event: "purchase",
                            ecommerce: {
                            currency: "USD",
                                items: [
                                    {
                                    item_id: productCode,
                                    item_name: productName,
                                    price: productPriceNumber,
                                    }
                                        ]
                                    }
                                });
        
                    }

                    if(boton.innerText === "+") {

                        contador = contador + 1;

                        var etiquetaCantidad = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class='contenedorCantidad']").querySelector("span[class*='cantidad-producto']");

                        etiquetaCantidad.innerText = contador;

                    }

                    if(boton.innerText === "-") {

                        contador = contador - 1;

                        var etiquetaCantidad = boton.closest("div[class*='tarjeta-producto']").querySelector("div[class='contenedorCantidad']").querySelector("span[class*='cantidad-producto']");

                        if(contador < 1) {

                            contador = 1;

                        }

                        etiquetaCantidad.innerText = contador;
                        
                    }


            }
        })

    }


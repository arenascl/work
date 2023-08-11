
const womanProducto = document.querySelector("#box-content");
const subirId = (arg) => {
  localStorage.setItem("idProducto", arg)
}
const loadWomanProducts = async () => {
    const url = "http://localhost:3000/productos?idCategoria=10"
    fetch(url).then(res => res.json())
        .then(data => {

            data.forEach(producto => {
                const div = document.createElement("div");
                div.innerHTML = ` 
                             <div class="box">
                            <div>
                              <img src=${producto.img.imagenUno} alt="">
                            </div>
                            <div class="producto-info">
                              <div>
                                ${producto.nombre}
                              </div>
                              <div class="price">
                                <div>
                                  Precio:
                                </div>
                                <div>
                                  $${producto.precio}
                                </div>
                              </div>
                              <div class="content-button">
                                <button class="button-detail">
                                  <a class="redirect-detail" onclick="subirId(${producto.id})" href="../product-detail/index.html">
                                    Ver detalle
                                  </a>
                                </button>
                              </div>
                            </div>
                          </div>` ;

                          womanProducto.append(div);
            });
        })
}

loadWomanProducts()

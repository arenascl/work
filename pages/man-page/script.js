
const menProducts = document.querySelector("#box-content");
const subirId = (arg) => {
  localStorage.setItem("idProducto", arg)
}
const loadMenProducts = async () => {
  const url = "http://localhost:3000/productos?idCategoria=11"
  fetch(url).then(res => res.json())
    .then(data => {
      console.log(data)
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

        menProducts.append(div);
      });
    })
}

loadMenProducts()

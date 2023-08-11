import { fetchProducts, deleteProduct, createProduct, saveProduct } from "../../service/api.js"

/* Crear producto */ /* window metodo que representa una ventana que contiene el DOM */
window.createProductForm = async function createProductForm() {
    const createNameInput = document.getElementById('create-name').value;
    const createPriceInput = document.getElementById('create-price').value;
    const createDescriptionInput = document.getElementById('create-description').value;
    const createCategoriaInput = document.getElementById('create-categoria').value;
    const createImg1Input = document.getElementById('create-img1').value;
    const createImg2Input = document.getElementById('create-img2').value;
    const createImg3Input = document.getElementById('create-img3').value;
    const createImg4Input = document.getElementById('create-img4').value;


    const product = {
        nombre: createNameInput,
        precio: createPriceInput,
        descripcion: createDescriptionInput,
        img: {
            imagenUno: createImg1Input,
            imagenDos: createImg2Input,
            imagenTres: createImg3Input,
            imagenCuatro: createImg4Input
        },
        idCategoria: createCategoriaInput
    }
    await createProduct(product); /* se usa el await por que se necesita que el metodo createProduct responda con la informacion
     */
    alert("producto creado exitosamente")
    refreshProducts();/* se utiliza este metodo por que se necesia refrescar la informacion con data nueva */
}



/* Consultar productos */
const productListElement = document.getElementById('div1');
async function refreshProducts() {
    const productsData = await fetchProducts();
    displayProducts(productsData); /* display products: mapea informacion a un html */
}

refreshProducts();


function displayProducts(productsData) {
    const productHTML = productsData.map(product => `
    <li>
        <span>${product.nombre}</span>
        <span>$${product.precio}</span>
        <button onclick="editProduct(${product.id})">Editar</button>
        <button onclick="deleteProductF(${product.id})">Eliminar</button>
      </li>
    `).join('');

    productListElement.innerHTML = `<ul>${productHTML}</ul>`; /* se agrega html a la const que identifica de div */
}


/* Editar producto */
const editNameInput = document.getElementById('edit-name');
const editPriceInput = document.getElementById('edit-price');
const editDescriptionInput = document.getElementById('edit-description')
const editCategoryInput = document.getElementById('edit-categoria')
const editImg1Input = document.getElementById('edit-img1')
const editImg2Input = document.getElementById('edit-img2')
const editImg3Input = document.getElementById('edit-img3')
const editImg4Input = document.getElementById('edit-img4')
const editIdInput = document.getElementById('edit-id');
const editFormElement = document.getElementById('edit-form')


window.editProduct = async function editProduct(productId) {
    const products = await fetchProducts();
    const product = products.find(p => p.id === productId);
    if (product) {
        showEditForm(product);
    }
}

window.saveProductForm = async function saveProductForm() {
    const product = {
        id: editIdInput.value,
        nombre: editNameInput.value,
        precio: editPriceInput.value,
        descripcion: editDescriptionInput.value,
        img: {
            imagenUno: editImg1Input.value,
            imagenDos: editImg2Input.value,
            imagenTres: editImg3Input.value,
            imagenCuatro: editImg4Input.value
        },
        idCategoria: editCategoryInput.value
    }
    await saveProduct(product);
     refreshProducts(); 
    alert("Producto editado exitosamente")

}
function showEditForm(product) {/* funcion que muestra formulario y mapea infromacion a editar */
    editNameInput.value = product.nombre;
    editPriceInput.value = product.precio;
    editDescriptionInput.value = product.descripcion;
    editCategoryInput.value = product.idCategoria;
    editImg1Input.value = product.img.imagenUno;
    editImg2Input.value = product.img.imagenDos;
    editImg3Input.value = product.img.imagenTres;
    editImg4Input.value = product.img.imagenCuatro;
    editIdInput.value = product.id;
    editFormElement.style.display = 'block';
}

function hideEditForm() {
    editFormElement.style.display = 'none';
}

window.cancelEdit = function cancelEdit() {
    hideEditForm();
}
 

/* Eliminar productos */
window.deleteProductF = async function deleteProductF(id) {
    deleteProduct(id)
}
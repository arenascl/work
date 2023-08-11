import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


/* Lista de productos */
export async function fetchProducts() {
    try {
        const response = await axios.get('http://localhost:3000/productos');
        return response.data; /* data informacion productos */
    } catch (error) {
        console.error('Error al cargar información:', error);
        return [];
    }
}

/* Crear productos */
export async function createProduct(product) {

    try {
        const response = await axios.post(`http://localhost:3000/productos/`, product);
        return response.data
    } catch (error) {
        console.error('Error al crear el producto:', error);
        alert('Hubo un error al crear el producto. Por favor, inténtalo de nuevo.');
    }
}

/* Eliminar productos */
export async function deleteProduct(productId) {
    try {
        await axios.delete(`http://localhost:3000/productos/${productId}`);
        return true /* se retorna true por que es el escenario exitoso de la eliminacion */
    } catch (error) {
        console.error('Error deleting product:', error);
        alert('Hubo un error al eliminar el producto. Por favor, inténtalo de nuevo.');
    }
}


/* Editar producto */
export async function saveProduct(product) {

    try {
        const response = await axios.put(`http://localhost:3000/productos/${product.id}`, {
            ...product /* uso de operador "..." trae la informacion ya creada */
        });
        return response /* contiene la informacion taria de la base de datos */
    } catch (error) {
        console.error('Error updating product:', error);
        alert('Hubo un error al actualizar el producto. Por favor, inténtalo de nuevo.');
    }
}
let product = JSON.parse(localStorage.getItem('products'));
console.log(product);

document.getElementById('img').src = product.images[0];
document.getElementById('title').innerHTML = product.title;
document.getElementById(`price`).innerHTML = product.price;
document.getElementById('rating').innerHTML = `Rating : ${product.rating}`;
document.getElementById(`category`).innerHTML = product.category;
document.getElementById('brand').innerHTML = product.brand;
document.getElementById(`description`).innerHTML = product.description;
import { productos, categorias } from "../../../data/data";
import type { Product } from "../../../types/product";
import { addToCart, getCartCount } from "../cart/cartStorage.ts";

const productsContainerElement = document.querySelector<HTMLDivElement>("#productsContainer");
const categoriesContainerElement = document.querySelector<HTMLDivElement>("#categoriesContainer");
const searchInputElement = document.querySelector<HTMLInputElement>("#searchInput");
const cartCountElement = document.querySelector<HTMLSpanElement>("#cart-count");

if (!productsContainerElement || !categoriesContainerElement || !searchInputElement || !cartCountElement) {
  throw new Error("No se encontraron elementos necesarios del DOM");
}

const productsContainer = productsContainerElement;
const categoriesContainer = categoriesContainerElement;
const searchInput = searchInputElement;
const cartCount = cartCountElement;

let categoriaSeleccionada = "Todas";

function updateCartBadge() {
  const total = getCartCount();

  cartCount.textContent = String(total);
}

function renderProducts(listaProductos: Product[]) {
  productsContainer.innerHTML = "";

  if (listaProductos.length === 0) {
    productsContainer.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }

  listaProductos.forEach((producto) => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>Categoria: ${producto.categoria}</p>
    <p>Precio: $${producto.precio}</p>

    <div class="quantity-control">
      <button class="btn-decrease">-</button>
      <span class="quantity">1</span>
      <button class="btn-increase">+</button>
    </div>

    <button class="btn-add">Agregar al carrito</button>
    `;

    const decreaseButton = card.querySelector<HTMLButtonElement>(".btn-decrease");
    const increaseButton = card.querySelector<HTMLButtonElement>(".btn-increase");
    const quantitySpan = card.querySelector<HTMLSpanElement>(".quantity");

  if (!decreaseButton || !increaseButton || !quantitySpan) {
  return;
  }

  increaseButton.addEventListener("click", () => {
    let quantity = Number(quantitySpan.textContent);

    quantity++;

    quantitySpan.textContent = String(quantity);
  });

  decreaseButton.addEventListener("click", () => {
    let quantity = Number(quantitySpan.textContent);

    if (quantity > 1) {
      quantity--;
    }

    quantitySpan.textContent = String(quantity);
  });
    const button = card.querySelector<HTMLButtonElement>(".btn-add");

    if (button) {
      button.addEventListener("click", () => {
        const quantity = Number(quantitySpan.textContent);
        addToCart(producto, quantity);
        updateCartBadge();
        alert(`Agregaste ${quantity} x ${producto.nombre}`);
      }); 
    }

    productsContainer.appendChild(card);
  });
}

function aplicarFiltros() {
  const textoBuscado = searchInput.value.trim().toLowerCase();

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre.toLowerCase().includes(textoBuscado);
    const coincideCategoria =
      categoriaSeleccionada === "Todas" || producto.categoria === categoriaSeleccionada;

    return coincideNombre && coincideCategoria;
  });

  renderProducts(productosFiltrados);
}

function renderCategories() {
  categoriesContainer.innerHTML = "";

  const botonTodas = document.createElement("button");
  botonTodas.textContent = "Todas";
  botonTodas.classList.add("category-button");

  botonTodas.addEventListener("click", () => {
    categoriaSeleccionada = "Todas";
    aplicarFiltros();
  });

  categoriesContainer.appendChild(botonTodas);

  categorias.forEach((categoria) => {
    const button = document.createElement("button");
    button.textContent = categoria.nombre;
    button.classList.add("category-button");

    button.addEventListener("click", () => {
      categoriaSeleccionada = categoria.nombre;
      aplicarFiltros();
    });

    categoriesContainer.appendChild(button);
  });
}

searchInput.addEventListener("input", aplicarFiltros);

renderCategories();
renderProducts(productos);
updateCartBadge();
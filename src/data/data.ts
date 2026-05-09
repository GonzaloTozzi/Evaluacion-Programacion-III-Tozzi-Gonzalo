import type { Product } from "../types/product";
import type { Categoria } from "../types/categoria";

export const categorias: Categoria[] = [
  { id: 1, nombre: "Hamburguesas" },
  { id: 2, nombre: "Pizzas" },
  { id: 3, nombre: "Bebidas" },
  { id: 4, nombre: "Acompañamientos" },
  { id: 5, nombre: "Empanadas" },
  { id: 6, nombre: "Platos" },
  { id: 7, nombre: "Sandwiches" } 
];

export const productos: Product[] = [
  {
    id: 1,
    nombre: "Hamburguesa Doble",
    precio: 10000,
    categoria: "Hamburguesas",
    imagen: "/assets/hamburguesa-doble.jpg",
    descripcion: "Doble carne con queso, tomate y lechuga"
  },

  {
    id: 2,
    nombre: "Pizza Muzzarella",
    precio: 8000,
    categoria: "Pizzas",
    imagen: "/assets/pizza-muzza.jpg",
    descripcion: "Tradicional pizza con queso muzzarella"
  },

  {
    id: 3,
    nombre: "Coca Cola",
    precio: 2000,
    categoria: "Bebidas",
    imagen: "/assets/coca.jpg",
    descripcion: "Coca Cola 1,5 Lts"
  },

  {
    id: 4,
    nombre: "Hamburguesa Simple",
    precio: 7000,
    categoria: "Hamburguesas",
    imagen: "/assets/hamburguesa-simple.jpg",
    descripcion: "Hamburguesa simple con queso, huevo y salsa"
  },

  {
    id: 5,
    nombre: "Pizza Napolitana",
    precio: 9500,
    categoria: "Pizzas",
    imagen: "/assets/pizza-napo.jpg",
    descripcion: "Pizza con tomate fresco, ajo y muzzarella"
  },

  {
    id: 6,
    nombre: "Papas Fritas",
    precio: 3500,
    categoria: "Acompañamientos",
    imagen: "/assets/papas-fritas.jpg",
    descripcion: "Porción grande de papas fritas crocantes"
  },

  {
    id: 7,
    nombre: "Sprite",
    precio: 1800,
    categoria: "Bebidas",
    imagen: "/assets/sprite.jpg",
    descripcion: "Sprite 1,5 Lts"
  },

  {
    id: 8,
    nombre: "Empanadas de Carne",
    precio: 5000,
    categoria: "Empanadas",
    imagen: "/assets/empanadas-carne.jpg",
    descripcion: "Media docena de empanadas de carne cortada a cuchillo"
  },

  {
    id: 9,
    nombre: "Milanesa con Papas",
    precio: 12000,
    categoria: "Platos",
    imagen: "/assets/milanesa.jpg",
    descripcion: "Milanesa de carne con papas fritas"
  },

  {
    id: 10,
    nombre: "Agua Mineral",
    precio: 1500,
    categoria: "Bebidas",
    imagen: "/assets/agua.jpg",
    descripcion: "Agua mineral sin gas 500ml"
  },

  {
    id: 11,
    nombre: "Lomito Completo",
    precio: 13500,
    categoria: "Sandwiches",
    imagen: "/assets/lomito.jpg",
    descripcion: "Lomito con jamón, queso, huevo y vegetales"
  },

  {
    id: 12,
    nombre: "Pizza Calabresa",
    precio: 10500,
    categoria: "Pizzas",
    imagen: "/assets/pizza-calabresa.jpg",
    descripcion: "Pizza con muzzarella y rodajas de calabresa"
  },

  {
    id: 13,
    nombre: "Hamburguesa BBQ",
    precio: 11500,
    categoria: "Hamburguesas",
    imagen: "/assets/hamburguesa-bbq.jpg",
    descripcion: "Hamburguesa con salsa barbacoa, cheddar y panceta"
  },

  {
    id: 14,
    nombre: "Fanta",
    precio: 1800,
    categoria: "Bebidas",
    imagen: "/assets/fanta.jpg",
    descripcion: "Fanta naranja 1,5 Lts"
  }  
];
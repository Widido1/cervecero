"use server"

import SearchResults from "@/app/components/searchresults"
import fake from "@/app/images/fake.webp"


//import { prisma } from "@/libs/prisma";

//async function loadProducts(){
//    const allProducts = await prisma.product.findMany();
//    return allProducts;
//}

export default async function SearchPage({params}){
    //const products = await loadProducts();
    const {value} = await params;
    const products = [
        {id: 1, name: "Budweiser", marca: "Budweiser", img: "", description: "Budweiser lager de litro", precio: 350, estilo: "Lager", contenido: "1000"},
        {id: 2, name: "Heineken", marca: "Heineken", img: "", description: "Heineken lager de litro", precio: 350, estilo: "Lager", contenido: "1000"},
        {id: 3, name: "Patagonia", marca: "Patagonia", img: "", description: "Patagonia lager de litro", precio: 500, estilo: "Lager", contenido: "1000"},
        {id: 4, name: "Quilmes", marca: "Quilmes", img: "", description: "Quilmes Brown de litro", precio: 400, estilo: "Brown", contenido: "1000"},
        {id: 5, name: "Stella Artois", marca: "Stella Artois", img: "", description: "Stella Rubia de litro", precio: 500, estilo: "Rubia", contenido: "1000"},
        {id: 6, name: "Quilmes", marca: "Quilmes", img: "", description: "Quilmes Rubia de litro", precio: 400, estilo: "Rubia", contenido: "1000"},
        {id: 7, name: "Patagonia", marca: "Patagonia", img: "", description: "Patagonia Rubia de litro", precio: 450, estilo: "Rubia", contenido: "1000"},
        {id: 8, name: "Budweiser", marca: "Budweiser", img: "", description: "Budweiser brown de litro", precio: 425, estilo: "Brown", contenido: "1000"},
        {id: 9, name: "Heineken", marca: "Heineken", img: "", description: "Heineken stout de litro", precio: 400, estilo: "Stout", contenido: "1000"},
        {id: 10, name: "Patagonia", marca: "Patagonia", img: "", description: "Patagonia stout de litro", precio: 450, estilo: "Stout", contenido: "1000"},
        {id: 11, name: "Quilmes", marca: "Quilmes", img: "", description: "Quilmes lager de medio litro", precio: 250, estilo: "Lager", contenido: "500"},
        {id: 12, name: "Stella Artois", marca: "Stella Artois", img: "", description: "Stella lager de medio litro", precio: 325, estilo: "Lager", contenido: "500"},
        {id: 13, name: "Budweiser", marca: "Budweiser", img: "", description: "Budweiser stout de medio litro", precio: 250, estilo: "Stout", contenido: "500"},
        {id: 14, name: "Heineken", marca: "Heineken", img: "", description: "Heineken stout de medio litro", precio: 225, estilo: "Stout", contenido: "500"},
        {id: 15, name: "Patagonia", marca: "Patagonia", img: "", description: "Patagonia rubia de medio litro", precio: 325, estilo: "Rubia", contenido: "500"},
        {id: 16, name: "Quilmes", marca: "Quilmes", img: "", description: "Quilmes brown de medio litro", precio: 250, estilo: "Brown", contenido: "500"},
        {id: 17, name: "Stella Artois", marca: "Stella Artois", img: "", description: "Stella brown de medio", precio: 350, estilo: "Brown", contenido: "500"},
        {id: 18, name: "Budweiser", marca: "Budweiser", img: "", description: "Budweiser lager de 330ml", precio: 125, estilo: "Lager", contenido: "330"},
        {id: 19, name: "Heineken", marca: "Heineken", img: "", description: "Heineken lager de 330ml", precio: 90, estilo: "Lager", contenido: "330"},
        {id: 20, name: "Patagonia", marca: "Patagonia", img: "", description: "Patagonia lager de 330ml", precio: 175, estilo: "Lager", contenido: "330"},
        {id: 21, name: "Quilmes", marca: "Quilmes", img: "", description: "Quilmes Brown de 330ml", precio: 125, estilo: "Brown", contenido: "330"},
        {id: 22, name: "Stella Artois", marca: "Stella Artois", img: "", description: "Stella Rubia e 330ml", precio: 175, estilo: "Rubia", contenido: "330"},
        {id: 23, name: "Cerveza de Prueba", marca: "Quilmes", img: fake, description: "Cerveza de prueba", precio: 1, estilo: "Rubia", contenido: "330"},


    ];
    
    return(
        <div>
            <SearchResults products={products} word={value}/>
        </div>
    )
    
} 
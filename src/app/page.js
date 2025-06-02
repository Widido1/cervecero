
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import noimage from "./images/noimage.webp"; //ruta de la imagen que se va a mostrar en el slider
import C_Italiana from "./images/C_Italiana.webp"; //ruta de la imagen que se va a mostrar en el slider
import C_Francesa from "./images/C_Francesa.webp"; //ruta de la imagen que se va a mostrar en el slider
import C_Oficina from "./images/C_Oficina.webp"; //ruta de la imagen que se va a mostrar en el slider
import C_Express from "./images/C_Express.webp"; //ruta de la imagen que se va a mostrar en el slider

const items = [
  {name: "Cafetera Italiana", img: C_Italiana, description: "Cafetera Italiana de 3 tazas. Clasica y funcional."},
  {name: "Cafetera Francesa", img: C_Francesa, description: "Importada de Francia, barata pero de muy buena calidad, consuelo para quienes acaban de perder la final del mundo."},
  {name: "Cafetera Oficina", img: C_Oficina, description: "Tipica Cafetera de oficina, para esos dias en los que no quieres pensar. Mucha capacidad, mantiene el cafe caliente por mucho tiempo."},
  {name: "Cafetera Express", img: C_Express, description: "El mejor Café siempre es el de Cafetera Express. No hay nada mejor que un buen espresso."},
];

export default function Home() {

  return (
    <div>
      <Navbar/>
      <Slider items={items}/>
    </div>
  )    
}

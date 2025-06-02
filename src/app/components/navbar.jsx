import Link from "next/link";
import SearchBar from "./searchbar";

export default function Navbar(){
    
    return(
        <div className="theme2 grid grid-flow-col grid-cols-3 place-self-center text-center place-items-center w-full h-[100px] px-2 font-bold text-4xl">
            <div>
                <h1 className="TextShine Bigger text-3xl">Logo</h1>
            </div>
            <div className="grid grid-flow-row gap-2">
                <div className="grid grid-flow-col place-content-center place-self-center items-center align-middle">
                    <SearchBar/>
                </div>
                <div className="grid grid-flow-col gap-8 place-self-center place-content-center place-items-center text-center text-xl">
                    <Link href="/"><h1 className="TextShine Bigger">Inicio</h1></Link>
                    <Link href="/search/empty"><h1 className="TextShine Bigger">Productos</h1></Link>
                    <h1 className="TextShine Bigger">Concursos</h1>
                    <h1 className="TextShine Bigger">Talleres</h1>
                    <h1 className="TextShine Bigger">Contactos</h1>
                </div>
            </div>
            <div>
                <h1 className="TextShine Bigger text-3xl">Carrito</h1>
            </div>
        </div>
    );
}
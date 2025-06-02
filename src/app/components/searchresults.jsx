"use client"
import { useEffect, useState } from "react";
import SearchAgain from "./searchAgain"; //importa el componente de busqueda
import ButtonF from "./buttonF";
import PageResults from "./pageResults";
import Link from "next/link";
import Cart from "./cart";
import CartButton from "./cartButton";
import { useCart } from "../hooks/usecart";


export default function SearchResults(props){
    const allProducts = props.products; //arreglo que contiene todos los productos, de acá se sacan los resultados
    const searchW = props.word; //palabra de busqueda
    const [results, setResults] = useState([...allProducts]); //resultados de la busqueda
    const [cantidadR, setCantidadR] = useState("default"); //cantidad de resultados
    const [precio, setPrecio] = useState("default"); //precio de los productos
    const [marca, setMarca] = useState("default"); //marca de los productos
    const [estilo, setEstilo] = useState("default"); //estilo de los productos
    const [orden, setOrden] = useState("Mayor"); //orden de los productos
    const [contenido, setContenido] = useState("default"); //contenido de los productos
    const [newSearchW, setNewSearchW] = useState("default"); //nuevo valor de busqueda
    const [displayCart, setDisplayCart] = useState(false); //estado del carrito, si esta abierto o cerrado
    const {cart} = useCart();
    const [resize, setResize] = useState(""); //estado del resize, si esta en mobile o desktop

    useEffect(() => {
        if(displayCart === true){ //si el carrito esta abierto, se cambia el estado del resize a true
            setResize("grid grid-flow-col p-4 pr-[310px]"); //se cambia el estado del resize a true
        }else{
            setResize("grid grid-flow-col p-4"); //se cambia el estado del resize a false
        }
    },[displayCart]); //useEffect vacío para evitar errores de eslint, se usa para que no se muestre el warning de "useEffect sin dependencias"



    const purgeSearch = (word) => {
        let purged = word.toLowerCase(); //pasa la palabra de busqueda a minisculas, para que las mayusculas no entorpezcan la busqueda
        let borrar = /%20/; // crea un regEx /%2/ para reemplazar ese valor por un espacio tradicional
        if(borrar.test(purged)){
            purged = purged.split("%20").join(" "); //separa el string cada vez que hay un 2% formando un arreglo, luego lo vuelve a unir entre " " con join()
        }
        return purged
    }
    
    const findResults = (purged) => {
        const findW = new RegExp(purged); //construlle un RegEx usando la palabra de la busqueda purgada para evitar errores
        const results = allProducts.reduce((res, x) => { //construye un arreglo filtrando los productos que tienen un nombre que coincide con el regEx
            if(findW.test(x.name.toLowerCase())){ //testea con los nombres en minuscula, se comparan minusculas con minusculas, y eso deja de ser un problema
                res.push(x)
            } 
            return res
        }, [],);
        return results //devuelve el arreglo de productos que coinciden con la busqueda
    }


    useEffect(()=>{
        const purged = purgeSearch(searchW); //purgueSearch se encarga de purgar la palabra de busqueda para evitar errores como 2% o mayusculas
        setResults(findResults(purged)); //arma el arreglo con los resultados de la busqueda
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if(searchW === "empty"){
            setCantidadR(allProducts.length); //si la palabra de busqueda es vacia, se le asigna el valor de "empty" para que no haya errores
        }else{
            setCantidadR(results.length); //si la palabra de busqueda no es vacia, se le asigna el valor de la cantidad de resultados
        } //si la palabra de busqueda es vacia, se le asigna el valor de "empty" para que no haya errores
    },[])

    useEffect(() => {
    let filtered = [...allProducts];

    // Apply search term filter
    if (newSearchW !== "" && newSearchW !== "default" && newSearchW !== "empty") {
        const purged = purgeSearch(newSearchW);
        filtered = findResults(purged);
    }

    // Apply other filters
    if (estilo !== "default") filtered = filtered.filter(x => x.estilo === estilo);
    if (marca !== "default") filtered = filtered.filter(x => x.marca === marca);
    if (contenido !== "default") filtered = filtered.filter(x => x.contenido === contenido);
    if (precio !== "default") {
        switch (precio) {
            case "-100":
                filtered = filtered.filter(x => x.precio < 100);
                break;
            case "100-200":
                filtered = filtered.filter(x => x.precio >= 100 && x.precio <= 200);
                break;
            case "200-300":
                filtered = filtered.filter(x => x.precio >= 200 && x.precio <= 300);
                break;
            case "300-400":
                filtered = filtered.filter(x => x.precio >= 300 && x.precio <= 400);
                break;
            case "+400":
                filtered = filtered.filter(x => x.precio > 400);
                break;
            default:
                break;
        }
    }
    if (orden === "Mayor") {
        filtered = filtered.sort((a, b) => b.precio - a.precio);
    } else if (orden === "Menor") {
        filtered = filtered.sort((a, b) => a.precio - b.precio);
    }

    setResults(filtered);
    setCantidadR(filtered.length); // Update count

    }, [newSearchW, estilo, marca, contenido, precio, orden, allProducts]);

 //cuando se cambia el valor de results, se ejecuta el useEffect

    return(
        <div>
            
            <div className="theme2 fixed z-10 grid grid-flow-col place-self-center text-center place-items-center w-full h-[100px] px-2 font-bold text-4xl">
                {/* Otro Navbar, este necesita un buscador diferente para que no se recarge la pagina al buscar en la misma */}
                <div>
                    <h1 className="text-3xl TextShine Bigger">Logo</h1>
                </div>
                <div className="grid grid-flow-row place-content-center place items-center gap-2">
                    <div className="grid grid-flow-col place-content-center place-self-center place-items-center align-middle">
                        <SearchAgain set={setNewSearchW}/>
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
                    <CartButton setDisplay={setDisplayCart} display={displayCart} cart={cart}/>
                </div>           
            </div>
            


            <div className="grid grid-flow-col pt-[100px]">
                {/* Barra de filtros / listado de prodductos / carrito (cuando se activa) */}
                <div className={resize}>
                    <div className="grid grid-flow-row p-4 place-content-start text-left gap-4">
                        <h1>Cervezas</h1>
                        <div>
                            <h1 className="text-2xl font-bold">Estilos:</h1>
                            <div className="grid grid-flow-row place-content-start place-items-start pl-2">
                                <ButtonF set={setEstilo} global={estilo} value={"IPA"} text={"IPA"}/>
                                <ButtonF set={setEstilo} global={estilo} value={"APA"} text={"APA"}/>
                                <ButtonF set={setEstilo} global={estilo} value={"Lager"} text={"Lager"}/>
                                <ButtonF set={setEstilo} global={estilo} value={"Stout"} text={"Stout"}/>
                                <ButtonF set={setEstilo} global={estilo} value={"Porter"} text={"Porter"}/>
                                <ButtonF set={setEstilo} global={estilo} value={"Rubia"} text={"Rubia"}/>
                                <ButtonF set={setEstilo} global={estilo} value={"Amber"} text={"Amber"}/>
                                <ButtonF set={setEstilo} global={estilo} value={"Brown"} text={"Brown"}/>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Marcas:</h1>
                            <div className="grid grid-flow-row place-content-start place-items-start pl-2">
                                <ButtonF set={setMarca} global={marca} value={"Patagonia"} text={"Patagonia"}/>
                                <ButtonF set={setMarca} global={marca} value={"Quilmes"} text={"Quilmes"}/>
                                <ButtonF set={setMarca} global={marca} value={"Antares"} text={"Antares"}/>
                                <ButtonF set={setMarca} global={marca} value={"Salta"} text={"Salta"}/>
                                <ButtonF set={setMarca} global={marca} value={"Budweiser"} text={"Budweiser"}/>
                                <ButtonF set={setMarca} global={marca} value={"Heineken"} text={"Heineken"}/>
                                <ButtonF set={setMarca} global={marca} value={"Stella Artois"} text={"Stella Artois"}/>
                            </div>  
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Precios:</h1>
                            <div className="grid grid-flow-row place-content-start place-items-start pl-2">
                                <ButtonF set={setPrecio} global={precio} value={"-100"} text={"Menos de $100"}/>
                                <ButtonF set={setPrecio} global={precio} value={"100-200"} text={"$100 - $200"}/>
                                <ButtonF set={setPrecio} global={precio} value={"200-300"} text={"$200 - $300"}/>
                                <ButtonF set={setPrecio} global={precio} value={"300-400"} text={"$300 - $400"}/>
                                <ButtonF set={setPrecio} global={precio} value={"+400"} text={"Mas de $400"}/>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Contenido:</h1>
                            <div className="grid grid-flow-row place-content-start place-items-start pl-2">
                                <ButtonF set={setContenido} global={contenido} value={"330"} text={"330ml"}/>
                                <ButtonF set={setContenido} global={contenido} value={"500"} text={"500ml"}/>
                                <ButtonF set={setContenido} global={contenido} value={"750"} text={"750ml"}/>
                                <ButtonF set={setContenido} global={contenido} value={"1000"} text={"1000ml"}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-flow-col pb-4">
                            <div className="text-lg font-bold">{cantidadR} productos encontrados</div>
                            <select className="grid place-self-end theme2 p-2 w-[500px]" value={orden} onChange={(e) => setOrden(e.target.value)}>
                                <option value="Mayor">Mayor a menor precio</option>
                                <option value="Menor">Menor a mayor precio</option>
                            </select>
                        </div>
                        <div>
                            <PageResults items={results} PerPage={6}/>
                        </div>
                    </div>  
                </div>
                <Cart className active={displayCart}/>

            </div>
        </div>
    );
}
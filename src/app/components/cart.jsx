import { useEffect, useState } from "react";
import { useCart } from "../hooks/usecart";
import CartPages from "./cartPages";
import { createPreference } from "@/api"; // Importa la API si es necesario

export default function Cart(props){
    const active = props.active; //estado del carrito
    const [style, setStyle] = useState("hidden"); //estilo del carrito
    const {cart, clearCart} = useCart(); //hook para acceder al carrito

    useEffect(() => {
        if(active === true){
            setStyle("theme2 fixed w-[300px] h-full grid grid grid-flow-row place-self-end place-content-start top-24 border-l-4 border-[--color2]");
        }else{
            setStyle("hidden");
        }
    }, [active]); //cuando el estado cambia, se cambia el estilo del carrito

    const handlePayment = async () => {
    if (cart.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    try {
        const preferenceData = cart.map(item => ({
                id: item.id, // Asegúrate de que cada item tenga un ID único
                title: item.name,
                unit_price: item.price,
                quantity: item.quantity,
                currency_id: "ARS", // Ensure currency is specified
            }));
        console.log("Datos de la preferencia:", preferenceData);

        const initPoint = await createPreference(preferenceData);
        console.log("Punto de inicio de pago:", initPoint);
        
        if (!initPoint) {
            throw new Error("No init_point returned from MercadoPago");
        }

        window.location.href = initPoint;
    } catch (error) {
        console.error("Error al crear la preferencia de pago:", error);
        alert("Error al procesar el pago. Por favor, inténtalo de nuevo.");
    }}

    return(
        <div className={style}>
            <h1 className="text-2xl font-bold px-4 mb-1">Productos en el carrito:</h1>
            <div className="grid grid-flow-row place-self-center place-items-center place-content-center">
                <CartPages items={cart} PerPage={3}/>
                {/*cart.map((product) => (
                    <CartCard product={product} key={product.id}/>
                ))*/}
                <div className="grid grid-flow-col place-self-center place-content-center place-items-center gap-4">
                    <button className="theme3 BoxShine Bigger rounded-md w-[125px] h-[45px] my-1 text-lg font-bold" onClick={() => handlePayment()}>Comprar</button>
                    <button className="theme4 BoxShine Bigger rounded-md w-[125px] h-[45px] my-1 text-md font-bold" onClick={() => clearCart()}>Vaciar Carrito</button>
                </div>
            </div>
        </div>
    );
}
import Image from "next/image";
import { useCart } from "../hooks/usecart";

export default function CartCard(props){
    const product = props.product;
    const {removeFromCart} = useCart();

    return(
        <div key={product.id} className="theme1 py-2 px-8 m-2 rounded-md grid grid-flow-row place-items-center place-self-center place-content-center">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <Image
                src={product.img}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-md"
            />
            <p className="text-md font-bold">{product.price}$</p>
            <div className="grid grid-flow-col place-content-center place-items-center text-center gap-1">
                <h1>Cantidad: </h1> <h1 className="text-lg font-bold">{product.quantity}</h1>
            </div>
            <button onClick={() => removeFromCart(product)} className="theme2 Bigger px-2 py-1 rounded-md text-lg">Eliminar</button>
        </div>
    )
}
import { useCart } from "../hooks/usecart";

export default function AddCartButton(props){
    const { addToCart } = useCart(); //desestructuracion de las props
    const product = props.product; //desestructuracion del producto

    return(
        <button onClick={() => addToCart(product)} className="theme3 BoxShine Bigger w-3/4 mx-auto rounded-md p-2 m-2 text-lg font-bold">
            Comprar
        </button>
    )
}
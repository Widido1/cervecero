import Image from "next/image";
import cartimage from "@/app/icons/cartimage.png";

export default function CartButton(props){
    const { cart } = props; //desestructuracion del carrito
    const { display } = props; //desestructuracion de la funcion para mostrar el carrito
    const { setDisplay } = props; //desestructuracion de la funcion para cambiar el estado del carrito
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); //calculo del total de items en el carrito

    return(
        <div className="relative flex items-center justify-center">
            <Image
                src={cartimage}
                alt="Cart"
                width={70}
                height={70}
                className="Bigger text-[var(--color2)]"
                onClick={() => setDisplay(!display)} //funcion que se ejecuta al hacer click en el carrito
            />
            <span className="absolute top-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {totalItems}
            </span>

        </div>
    );
}
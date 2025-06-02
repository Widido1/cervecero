import Link from "next/link";

export const SuccessPage = () => {
    return (
        <div className="theme2 w-full h-full grid grid-flow-row place-content-center place-items-center">
            <h1 className="text-3xl font-bold">¡Pago exitoso!</h1>
            <p className="text-lg mt-4">Gracias por tu compra. Tu pedido ha sido procesado con éxito.</p>
            <Link href="/" className="theme3 w-[200px] h-[45px] mt-6 text-lg font-bold text-center">Volver al inicio</Link>
        </div>
    );
}
import Link from "next/link";

export const PendingPage = () => {
    return (
        <div className="theme2 w-full h-full grid grid-flow-row place-content-center place-items-center">
            <h1 className="text-3xl font-bold">Pago pendiente</h1>
            <p className="text-lg mt-4">Tu pago está en proceso. Por favor, espera mientras confirmamos tu transacción.</p>
            <Link href="/" className="theme3 w-[200px] h-[45px] mt-6 text-lg font-bold text-center">Volver al inicio</Link>
        </div>
    );
}
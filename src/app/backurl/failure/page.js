import Link from "next/link";

export const failurePage = () => {
    return (
        <div className="theme2 w-full h-full grid grid-flow-row place-content-center place-items-center">
            <h1 className="text-3xl font-bold">Pago fallido</h1>
            <p className="text-lg mt-4">Lo sentimos, tu pago no se pudo completar. Por favor, intenta nuevamente.</p>
            <Link href="/" className="theme3 w-[200px] h-[45px] mt-6 text-lg font-bold text-center">Volver al inicio</Link>
        </div>
    );
}
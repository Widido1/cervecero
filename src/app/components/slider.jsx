"use client"
import Image from "next/image";
import {useState} from "react";
import noimage from "../images/noimage.webp"; //ruta de la imagen que se va a mostrar en el slider
import Mini from "./mini";

 //ruta de la imagen que se va a mostrar en el slider

export default function Slider(props){
    const cArray = props.items; //creamos el arreglo de componentes usando el arreglo de las props
    const [mI, setMI] = useState(0); //creamos el indice maestro del slider

    const detI = (I) => {
        //esta funcion garantiza que el IndiceMaestro (mI) no se pase de los limites del arreglo
        let i = I; 
        const L = cArray.length;
        if(i >= L){i = i - L};
        if(i < 0){i = L + i}; 
        return(i);
    }

    const NextF = () => {
        setMI(detI((mI + 1), cArray.length)); // le suma 3 a mI y utiliza detI para determinar que mI no se alga de los limites del arreglo
        //al modificar el mI cambian todos los componentes que se muestran en el slider
    }

    const PrevF = () => {
        setMI(detI((mI - 1), cArray.length));// le resta 3 a mI y utiliza detI para determinar que mI no se alga de los limites del arreglo
    }


    return(
        <div className="Slider mx-auto mt-8 gap-[20px] w-[250px] min-[400px]:w-[400px] min-[650px]:w-[650px] lg:w-[900px] xl:w-[1200px] px-4 pb-2">         
            <div className="theme1 grid grid-flow-col pb-8">
                <div className="grid place-content-center ">
                    <h1 className="text-4xl">{cArray[detI(mI)].name}</h1>
                    <p className="text-2xl">{cArray[detI(mI)].description}</p>
                </div>
                <div className="bg-[--color1]">
                    <Image
                        src={cArray[detI(mI)].img}
                        alt="no image"
                        width={400}
                        height={400}
                        className="mx-auto mezclar rounded-[20%] w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] xl:w-[400px] xl:h-[600px]"
                    />
                </div>
            </div>
            
            <div className="SliderWrapper grid grid-flow-col place-self-center gap-4">
                <button className="theme2 rounded-md text-5xl w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] xl:w-[100px] xl:h-[100px]" onClick={PrevF}>{"<"}</button>
                <div><Mini img={cArray[detI(mI)].img}/> </div>
                <div><Mini img={cArray[detI(mI + 1)].img}/></div>
                <div><Mini img={cArray[detI(mI + 2)].img}/></div>
                <button className="theme2 rounded-md text-5xl w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] xl:w-[100px] xl:h-[100px]" onClick={NextF}>{">"}</button>
            </div>

        </div>
    ) 
}
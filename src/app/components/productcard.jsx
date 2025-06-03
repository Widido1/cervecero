"use client";
import Image from "next/image";
import Link from "next/link";
import noimage from "../images/noimage.webp";
import AddCartButton from "./addCartButton";
import { useEffect, useState } from "react";

// ProductBox is for the main page, the one where we can see all the products

export default function ProductCard(props) {
    const pName = props.name;

    const [pImg, setPImg] = useState(noimage);
    useEffect(()=>{
        if(props.img && props.img !== ""){
            setPImg(props.img);
        }
    },[]) //imagen por defecto

    const product = {
        id: props.id,
        name: pName,
        img: pImg,
        des: props.des,
        price: props.price
    }

    return(
        <div className="rainbow">
            <div className="theme2 ProductBox flex-col justify-items-center text-center content-center space-y-4 rounded-md theme1 pb-4">
                <h1 className="ButtonH rounded-t-md w-full font-bold italic theme2 text-md md:text-lg xl:text-xl"><Link href={`/products/${props.id}`}>{/*<-- routing dinamico*/}
                {pName}
                </Link></h1>
                <div className="w-11/12 align-middle mx-auto relative">

                    <Image 
                        src={pImg} //si no hay imagen, se muestra la imagen de placeholder
                        alt="sin imagen"
                        width={400}
                        height={400}
                        className="mx-auto rounded-[20%] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]" //tamaño responsivo
                        //fill={true}
                        //style={imageStyle}
                    />
                    <p className="font-bold text-sm md:text-md">{props.des}</p>
                    <div>
                        <h1 className="theme1 w-3/4 mx-auto rounded-md">{props.price + "$"}</h1>
                    </div>
                    <div>
                        <AddCartButton product={product}/>
                    </div>
                </div>
            
            </div>
        </div>
    );
}
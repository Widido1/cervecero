"use client"

import Link from "next/link";
import { useState } from "react";

export default function SearchBar(props){
    const [searchW, setSearchW] = useState(""); 

    const change = event =>{
        const newValue = event.target.value;
        setSearchW(newValue);
    }

    return(
        <div className="grid grid-flow-col self-center place-self-center w-[600px]">
            <input value={searchW} onChange={change} className="rounded-md bg-amber-50 placeholder-stone-500 text-stone-950
               w-full h-[40px] min-[290px]:h-[40px] px-4 min-[340px]:px-8 text-sm min-[340px]:text-lg" placeholder="Search for a product..."/>
            <Link className="grid place-self-end absolute " href={
                searchW !== "" ? (`/search/${searchW}`):("/search/empty")    
            }><button className="rounded-md theme1 Bigger BoxShine w-[40px] h-[40px] text-2xl ">S</button></Link>
        </div>
    )
}
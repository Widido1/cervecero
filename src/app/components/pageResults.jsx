"use client"
import { useEffect, useState } from "react";
import ProductCard from "./productcard";

export default function PageResults(props){
    const items = props.items;
    const [currentPage, setCurrentPage] = useState(1);
    const PerPage = props.PerPage; //items por pagina
    const currentItems = items.slice((currentPage - 1) * PerPage, currentPage * PerPage); //items actuales 
    const totalPages = Math.ceil(items.length / PerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1); //total de paginas

    useEffect(() => {
        // If current page is beyond the new total pages, go to last page
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        }
        // If items were empty and now we have some, go to first page
        else if (totalPages > 0 && currentPage < 1) {
            setCurrentPage(1);
        }
    }, [items.length, totalPages, currentPage]);
 
    return(
        <div className="grid grid-flow-row">
            <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
                {currentItems.map((item) => (
                    <div key={item.id}><ProductCard id={item.id} name={item.name} img={item.img} des={item.description} price={item.precio}/></div>
                ))}
            </div>
            <div className="grid grid-flow-col place-content-center gap-4 p-2">
                {pages.map((page) => (
                    <button key={page} onClick={() => setCurrentPage(page)} className={
                        currentPage === page ? "rounded-md theme2 BoxShine2 Bigger w-[40px] h-[40px] text-2xl" : "rounded-md theme1 BoxShine2 Bigger w-[40px] h-[40px] text-2xl"
                    }>{page}</button>
                ))}
            </div>
        </div>
    )
}
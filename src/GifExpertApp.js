import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp() {

    //const categories = ['Jujutsu', 'Love is War', 'Nagatoro'];
    const [categories, setCategories] = useState(['Naruto']);

    const handleAdd = () => {
        //setCategories( [...categories, 'Naruto'] ); //una forma es el spread operator 
        setCategories( cat => [...cat, 'Naruto'] ); //la otra es con un callback
    }

    return(
        <>
            <h2> GifExpertApp </h2>

            <AddCategory setCategories = { setCategories }/>
            <hr></hr>

            <button onClick={ handleAdd }> Agregar anime </button>

            <ol>
                {
                    categories.map( cat => (
                        <GifGrid 
                        key={ cat }
                        category={ cat }/>
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp;
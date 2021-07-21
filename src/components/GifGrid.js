import React, { useEffect, useState }  from 'react'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
//import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images , loading } = useFetchGifs( category );

    //getGifs();

    return (
        <>
            <h3 className="animate__animated animate__headShake"> { category } </h3>

            { loading && <p className="animate__animated animate__pulse">Loading</p> }

            <div className="card-grid">
                <ol>
                    {
                        images.map( img => (
                            <GifGridItem
                            key={ img.id }
                            {...img}/>
                            ))
                        }
                </ol>
            </div>
        </>
    )
}

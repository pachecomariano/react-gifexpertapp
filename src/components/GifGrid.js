import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

import useFetchGifs from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);
    // useEffect(() => {getGifs(category).then(imgs=>setImages(imgs))}, [category]);
    const {data: images, loading} = useFetchGifs(category);  
 
    return (
        <>
            <h3>{category}</h3>
            {/* {loading ? 'Cargando.........': 'Data cargada =)'} */}
            { loading && <p> Cargando...........</p>}
            <div className="card-grid">
                { 
                    images.map(img => (
                        <GifGridItem
                        key = {img.id}
                        {...img} />
                    ))
                }
    
            </div>
        </>
    )
}

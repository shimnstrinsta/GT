import React, { useEffect, useState, useContext } from 'react'
import { Image  } from 'semantic-ui-react'
import ThemeContext from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const getProducts = () => {
    return Promise.resolve([
        { name : "Tarjeta gráfica Msi Geforce Rtx 3050 Gaming X 6gb Gddr6 96bit", price: 395999, rating: 4.9, image : "https://http2.mlstatic.com/D_NQ_NP_842879-MLU77148112435_062024-O.webp"},
        { name : "Procesador gamer Intel Core i9-14900K BX8071514900K de 24 núcleos y 6GHz de frecuencia con gráfica integrada", price: 1290900, rating: 5.0,image: "https://http2.mlstatic.com/D_NQ_NP_774021-MLA72440589472_102023-O.webp"},
        { name : "Motherboard B550m Ds3h Gigabyte Amd Am4", price: 196369, rating: 4.8,image: "https://http2.mlstatic.com/D_NQ_NP_878683-MCO44243749796_122020-O.webp"},
        { name : "Memoria RAM Vengeance RGB Pro gamer color negro 32GB 2 Corsair CMW32GX4M2Z3600C18", price: 271099, rating: 5.0,image: "https://http2.mlstatic.com/D_NQ_NP_796048-MLA74650234818_022024-O.webp"}
    ])
}

export default function ProductsList() {
    const [products, setProducts] = useState([]);    
    const { theme, toggleTheme } = useContext(ThemeContext);    
    
    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
        })        
    },[theme])

    return (
        <div className={'products_container_'+theme}>        
            {products.map((product, i) => (   
                <div className={'product_item '+'product_item_'+theme} key={i}>                      
                    <Image src={product.image} />                        
                    <div className={'product_item_content'}>               
                        <h2>{product.name}</h2>
                        <h3>${product.price}</h3>
                        <h4>{product.rating} <FontAwesomeIcon icon={faStar} /></h4>      
                        <button className={'product_item_button_'+theme}>Comprar</button>
                    </div>               
                </div>                 
            ))}            
                    
        </div>
    )
}

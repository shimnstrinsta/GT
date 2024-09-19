import React, {useContext} from 'react'
import CartContext from '../contexts/CartContext';
import ThemeContext from '../contexts/ThemeContext';
import { Image  } from 'semantic-ui-react'

export default function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);    
    const { theme,toggleTheme } = useContext(ThemeContext);   
    
    if (!cartItems.length){
        return(<div className={'cart_container_empty cart_container cart_container_'+theme}><h1>No hay productos en el carrito</h1></div>)
    }
    else{
    return (
        <div className={'cart_container cart_container_'+theme}>
            {cartItems.map((product, i) => (   
                <div className={'product_item '+'product_item_'+theme} key={i}>                      
                    <Image src={product.image} />                        
                    <div className={'product_item_content'}>               
                        <h2>{product.name}</h2>
                        <h3>${product.price}</h3>                        
                        <button onClick={() => removeFromCart(product.id)} className={'product_item_button product_item_button_'+theme}>Eliminar del carrito</button>
                    </div>
                </div>
            ))} 
        </div>
    )
    }
}

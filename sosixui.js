import React, {useState} from 'react'
import { IoDiamondOutline } from "react-icons/io5";

import { FaTheaterMasks } from "react-icons/fa";

export default function Sosixui() {
    let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
        <div>
            <span className='logo'><IoDiamondOutline /> Cтудия "АлмаZ"</span>
            <ul className='nav'>

                <li>История театра</li>
                <li>Спектакли</li>
                <li>Педагоки</li>
                <li>Выпускники</li>
                <li>Награды</li>



            </ul>
            <FaTheaterMasks onClick={() => setCartOpen(cartOpen = !cartOpen)} className = {`mask ${cartOpen && 'active'}`} />
            {cartOpen && (
                <div className='cart'
                >
                    <li><a>https://www.colorhexa.com/50d583</a> </li>
                </div>
            )}


        </div>
        <div className='presentation'>
        </div>
        <div className='history'></div>


    </header>
  )
}

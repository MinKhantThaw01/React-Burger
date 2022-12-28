import React, { useState } from 'react'
import '../assets/berger.css';


export default function Humberger() {
    const [burger_class, setBurgerClass] = useState('burger_bar unclicked');
    const [menu_class, setmenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger_bar clicked')
            setmenuClass('menu visible')
            let ul = document.querySelector('ul')
            let li = document.querySelectorAll('li');
            ul.style.transform = 'translateY(0)'

            li.forEach(x => {
                x.addEventListener('click', () => {
                    setIsMenuClicked(!isMenuClicked);
                    setBurgerClass('burger_bar unclicked')
                    setmenuClass('menu hidden')
                    let ul = document.querySelector('ul')
                    ul.style.transform = 'translateY(-200px)'
                })
            });



        } else {
            setBurgerClass('burger_bar unclicked')
            setmenuClass('menu hidden')
            let ul = document.querySelector('ul')
            ul.style.transform = 'translateY(-200px)'
        }
        setIsMenuClicked(!isMenuClicked);



    }
    return (
        <div className='container'>
            <div className='burger'>
                <nav><div className="controller">

                    <div className='burger-menu' onClick={updateMenu}>
                        <div className="cover">
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                        </div>
                    </div>
                    <div className={menu_class}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
                </nav>

            </div>

        </div>
    )
}

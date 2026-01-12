import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';

function App() {
    const [menuActive, setMenuActive] = useState(false);

    const items = [
        { value: 'Главная', href: '/main', icon: 'anchor' },
        { value: 'Услуги', href: '/service', icon: 'api' },
        { value: 'Магазин', href: '/shop', icon: 'android' },
        { value: 'О нас', href: '/about', icon: 'face' },
    ];
    return (
        <div className="app">
            <nav>
                <div
                    className="burger-btn"
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <span></span>
                </div>
            </nav>
            <main>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum recusandae dolores maxime aut iste, autem minus
                    commodi ut ex quis numquam eveniet non, ullam nemo animi
                    similique molestiae sunt consectetur, dolorem atque
                    perspiciatis? Nulla ad magnam fugit eum obcaecati unde,
                    quidem illum temporibus maiores vero quod atque excepturi
                    voluptatibus sequi sit adipisci deleniti quaerat architecto
                    eius soluta numquam ea sint! Ipsam unde fugit reiciendis
                    blanditiis magnam enim, laudantium quas ipsa voluptatibus
                    tempore esse quos aut impedit fugiat officiis harum,
                    nesciunt sint ratione odit vel iusto! Consequatur, incidunt
                    voluptatum corrupti recusandae in ipsum consectetur tempore
                    qui saepe veniam. Modi magni recusandae debitis! Atque
                    assumenda voluptate voluptatem tenetur, et praesentium iste
                    esse quis facilis, minima accusamus animi cupiditate dolore
                    consequatur sed quam rem iusto nisi id laboriosam, soluta
                    molestias voluptates aliquid? Reiciendis praesentium aut
                    iste ipsam ratione tempora repellat veritatis placeat.
                    Consequuntur veritatis ut voluptatibus reiciendis debitis,
                    necessitatibus minus, harum nobis maiores cum molestias,
                    excepturi explicabo impedit provident numquam! Numquam ab,
                    asperiores tempora officiis facere rem rerum a possimus est
                    soluta illum, architecto cumque maxime saepe, inventore
                    assumenda fuga molestiae aliquam quae maiores impedit vero
                    atque amet nam! Inventore voluptates, harum libero commodi
                    perspiciatis, facilis quasi fugiat laudantium rerum nostrum
                    earum reprehenderit?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum recusandae dolores maxime aut iste, autem minus
                    commodi ut ex quis numquam eveniet non, ullam nemo animi
                    similique molestiae sunt consectetur, dolorem atque
                    perspiciatis? Nulla ad magnam fugit eum obcaecati unde,
                    quidem illum temporibus maiores vero quod atque excepturi
                    voluptatibus sequi sit adipisci deleniti quaerat architecto
                    eius soluta numquam ea sint! Ipsam unde fugit reiciendis
                    blanditiis magnam enim, laudantium quas ipsa voluptatibus
                    tempore esse quos aut impedit fugiat officiis harum,
                    nesciunt sint ratione odit vel iusto! Consequatur, incidunt
                    voluptatum corrupti recusandae in ipsum consectetur tempore
                    qui saepe veniam. Modi magni recusandae debitis! Atque
                    assumenda voluptate voluptatem tenetur, et praesentium iste
                    esse quis facilis, minima accusamus animi cupiditate dolore
                    consequatur sed quam rem iusto nisi id laboriosam, soluta
                    molestias voluptates aliquid? Reiciendis praesentium aut
                    iste ipsam ratione tempora repellat veritatis placeat.
                    Consequuntur veritatis ut voluptatibus reiciendis debitis,
                    necessitatibus minus, harum nobis maiores cum molestias,
                    excepturi explicabo impedit provident numquam! Numquam ab,
                    asperiores tempora officiis facere rem rerum a possimus est
                    soluta illum, architecto cumque maxime saepe, inventore
                    assumenda fuga molestiae aliquam quae maiores impedit vero
                    atque amet nam! Inventore voluptates, harum libero commodi
                    perspiciatis, facilis quasi fugiat laudantium rerum nostrum
                    earum reprehenderit?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum recusandae dolores maxime aut iste, autem minus
                    commodi ut ex quis numquam eveniet non, ullam nemo animi
                    similique molestiae sunt consectetur, dolorem atque
                    perspiciatis? Nulla ad magnam fugit eum obcaecati unde,
                    quidem illum temporibus maiores vero quod atque excepturi
                    voluptatibus sequi sit adipisci deleniti quaerat architecto
                    eius soluta numquam ea sint! Ipsam unde fugit reiciendis
                    blanditiis magnam enim, laudantium quas ipsa voluptatibus
                    tempore esse quos aut impedit fugiat officiis harum,
                    nesciunt sint ratione odit vel iusto! Consequatur, incidunt
                    voluptatum corrupti recusandae in ipsum consectetur tempore
                    qui saepe veniam. Modi magni recusandae debitis! Atque
                    assumenda voluptate voluptatem tenetur, et praesentium iste
                    esse quis facilis, minima accusamus animi cupiditate dolore
                    consequatur sed quam rem iusto nisi id laboriosam, soluta
                    molestias voluptates aliquid? Reiciendis praesentium aut
                    iste ipsam ratione tempora repellat veritatis placeat.
                    Consequuntur veritatis ut voluptatibus reiciendis debitis,
                    necessitatibus minus, harum nobis maiores cum molestias,
                    excepturi explicabo impedit provident numquam! Numquam ab,
                    asperiores tempora officiis facere rem rerum a possimus est
                    soluta illum, architecto cumque maxime saepe, inventore
                    assumenda fuga molestiae aliquam quae maiores impedit vero
                    atque amet nam! Inventore voluptates, harum libero commodi
                    perspiciatis, facilis quasi fugiat laudantium rerum nostrum
                    earum reprehenderit?
                </p>
            </main>
            <Menu
                active={menuActive}
                setActive={setMenuActive}
                header={'Burger menu'}
                items={items}
            />
        </div>
    );
}

export default App;

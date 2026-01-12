import './Menu.css';

export default function Menu({ header, items, active, setActive }) {
    return (
        <div
            className={active ? 'menu active' : 'menu'}
            onClick={() => setActive(false)}
        >
            <div className="blur">
                <div
                    className="menu__content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="menu__header">{header}</div>
                    <ul>
                        {items.map((item) => {
                            return (
                                <li>
                                    <a href={item.href}>{item.value}</a>
                                    <br />
                                    <span className="material-icons">
                                        {item.icon}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

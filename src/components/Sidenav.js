import React from "react"
import { Link } from 'gatsby'

const Sidenav = (props) => {
    const menuItems = props.menu.map((item, key) =>
        <li className={ `menu-item ${item.childLevelItems ? 'menu-sub' : ''} ${props.activeSubMenu === key ? 'active' : ''}` } key={key}>
            <Link to={item.url}>{item.name}</Link>
            {(() => {
                if(item.childLevelItems) {
                    return getSubMenus(item.childLevelItems, key, props.subMenuToggle, props.activeSubMenu);
                }
            })()}
        </li>
    );

    function getSubMenus(props, childKey, toggle, toggleStatus) {
        const subMenuItems = props.map((item, key) =>
            <li className="menu-item" key={key}>
                <Link to={item.url}>{item.name}</Link>
            </li>
        );
        
        return <>
            <ul className="sub-menu">{subMenuItems}</ul>
            <span className="menu-toggle-sub" onClick={ toggle.bind(this, childKey) }>{ toggleStatus === childKey ? '-' : '+' }</span>
        </>;
    }

    return <nav className={ `sidenav ${props.isToggle ? 'open' : ''}` }>
        <div className="side-container">
            <ul className="menu">
               {menuItems}
            </ul>
        </div>
        <div className="menu-toggle toggle-close" onClick={ props.closeToggle }><span></span></div>
    </nav>
}

export default Sidenav
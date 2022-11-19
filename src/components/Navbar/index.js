import React, {useRef, useState} from "react";
import {useClickAway} from "react-use";

import "./navbar.css";
import {links} from "./data";

const Index = () => {
  const menuRef = useRef(null);

  const [currentMenu, openMenu] = useState(null);

  useClickAway(menuRef, () => {
    openMenu(null);
  });

  return(
    <div className={"containerNav"}>
      <ul className={"navList"}>

        {links.map((link, index) => {
          const {text } = link;
          return (
            <li className={"navLink"} key={`--menu-item-${index.toString()}`}>
              {/*Si existe, la llave subMenu, debe pintar lo siguiente: */}
              {link.submenu ? (
                <>
                  <div onClick={() => openMenu(index)} className={'menu-item'}>{text}</div>
                  {(currentMenu === index) && (
                    <div className={"subMenu"} ref={menuRef}>
                      {link.submenu.map((subMenuItem, index) => (

                        <a className={"linkSubmenu"} href={subMenuItem.path} key={`--submenu-item-${index.toString()}`}>{subMenuItem.title}</a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.path} className={'menu-item items-submenu'}>{text}</a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Index;
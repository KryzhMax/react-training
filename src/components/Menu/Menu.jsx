import React from "react";
import univ from "../../assets/images/univ.svg";
import { menuConfig } from "../../data/menu";
import css from "../Menu/Menu.module.css";

export function Menu() {
  return (
    <nav className={css.menu}>
      <ul>
        {menuConfig.map(({ id, name, img, to }) => {
          return <MenuItem key={id} img={img} name={name} to={to} />;
        })}
      </ul>
    </nav>
  );
}

export function MenuItem({ name, img, to }) {
  return (
    <li>
      <a href={to} className={css.menuLink}>
        <img src={img} alt="" />
        <p className={css.menuText}>{name}</p>
      </a>
    </li>
  );
}

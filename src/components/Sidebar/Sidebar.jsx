import React from "react";
import { Menu } from "../Menu/Menu";
import hero from "../../assets/images/hero.svg";
import css from "../Sidebar/Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={css.aside}>
      <div className={css.logoContainer}></div>
      <div className={css.menuWrapper}>
        <Menu />
        <div className={css.userWrapper}>
          <img src={hero} alt="user image" />
          <span className={css.user}>Bill Gates</span>
        </div>
      </div>
    </aside>
  );
}

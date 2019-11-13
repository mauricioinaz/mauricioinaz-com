import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import cl from './Layout.module.css';
import pdf from '../../assets/pdfs/MauricioCV2019.pdf'
import tw from '../../assets/icons/tw.png'
import cv from '../../assets/icons/cvIc.png'
//import DashToolbar from '../../components/Navigation/DashToolbar/DashToolbar';

class Layout extends Component {
  render() {

    //<NavLink to="/redes" exact activeClassName={cl.active}>Redes</NavLink>
    return (
      <>
      <header className={cl.Toolbar}>
          <nav >
          <div>
            <ul className={cl.NavigationItems}>
              <li className={cl.NavigationItem}>
                <div className={cl.Tuirer}>
                  <a href={"https://twitter.com/mauricioinaz"}>
                    <img src={tw} alt="tuirer"/>
                  </a>
                </div>
              </li>
              <li className={cl.NavigationItem}>
                <div className={cl.Tuirer}>
                  <a href={pdf}>
                    <img src={cv} alt="tuirer"/>
                  </a>
                </div>
              </li>
            </ul>
            </div>
          </nav>
      </header>
        <main>
            {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout

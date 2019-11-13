import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import cl from './Layout.module.css';
import pdf from '../../assets/pdfs/MauricioCV2019.pdf'
//import DashToolbar from '../../components/Navigation/DashToolbar/DashToolbar';

class Layout extends Component {
  render() {

    return (
      <>
      <header className={cl.Toolbar}>
          <nav >
          <div>
            <ul className={cl.NavigationItems}>
              <li className={cl.NavigationItem}>
                <NavLink to="/redes" exact activeClassName={cl.active}>Redes</NavLink>
              </li>
              <li className={cl.NavigationItem}>
                <a href={pdf}>CV</a>
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

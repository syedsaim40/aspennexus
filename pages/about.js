import React from 'react';
import Header from '../src/app/Components/Header';
import './service.scss';
import styles from "../src/app/page.module.css";
import "../src/app/globals.css";
import './about.scss';


function about() {
  return (
    <div>
      <Header/>
      <div className="About-section">
        <h1>About</h1>
      </div>
    </div>
  )
}

export default about

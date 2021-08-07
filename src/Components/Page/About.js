import React, { Fragment } from 'react';
import './About.css'

export default function About() {
    return (
      <Fragment>
            <header id="header">
                <div className="container">
                    <h1>About The Github Finder App</h1>
                </div>
        </header>
            <section>
                <div className="container">
                    <p>The purpose of app is to allow users to search Github users.</p>
                </div>
        </section>
      </Fragment>
    );
}

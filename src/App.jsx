
import React from 'react';
import Layout from './components/layout/layout';
import Header from './components/header/header';
import header from './components/header/header';

export default function App() {
    return (
        <Layout>
            <div className="content">
                <h1>Contenido Principal</h1>
                <p>Este es el contenido que actua como children .</p>
            </div>
        </Layout>
    );
}

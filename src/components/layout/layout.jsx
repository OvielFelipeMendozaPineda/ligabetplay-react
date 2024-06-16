// components/Layout.jsx
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
export default function Layout({ children}) {
  return (
    <div className="layout">
      <Header /> 
      <main>
       { children }
      </main>
      <Footer />
    </div>
  );
}

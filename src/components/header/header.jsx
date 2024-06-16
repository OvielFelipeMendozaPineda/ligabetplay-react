import React from 'react'
export default function header() {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="h2 font-weight-bold">Betplay Manager</div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              Equipos
            </li>
            <li className="nav-item">
              Jugadores
            </li>
            <li className="nav-item">
              Partidos
            </li>
            <li className="nav-item">
             Tabla de posiciones
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

import React, { useEffect, useState } from 'react';

export default function ListarEquipos() {
  const url = "http://localhost:3000/liga-app/equipo";

  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    cargarEquipos();
  }, []);

  const cargarEquipos = async () => {
    try {
      const resultado = await fetch(url);
      const data = await resultado.json();
      setEquipos(data);

    } catch (error) {
      console.error("Error al cargar los equipos:", error);
    }
  };
  return (
    <div>
      <h1>Listar equipos</h1>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import estatutoData from '../data/estatutoMerln.json';

const EstatutoTable = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    setArticulos(estatutoData);
  }, []);

  return (
    <div>
      <h2>Estatuto Merln</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Título</th>
            <th>Contenido</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((item, index) => (
            <tr key={index}>
              <td>{item.titulo}</td>
              <td>{item.contenido}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstatutoTable;

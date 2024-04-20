import React from 'react';
import './Table.css';

const DataTable = ({ data }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>Measure</th>
        <th>Class 1</th>
        <th>Class 2</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.measure}>
          <td>{row.measure}</td>
          <td>{row.class1}</td>
          <td>{row.class2}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;

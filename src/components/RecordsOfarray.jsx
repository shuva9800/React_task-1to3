import React from 'react'

export default function RecordsOfarray() {

    const records = [
        { id: 1, name: 'Robin', age: 20 },
        { id: 2, name: 'Rohon', age: 23 },
        { id: 3, name: 'Shuva', age: 30 },
        { id: 4, name: 'Bratajit', age: 26 },
      ];

  return (
    <div>
    <h1></h1>
        <h1>Records of array</h1>
        <div>
            {records.map((record)=> (<div>
                <p>Name:-{record.name} , <span>Age:-{record.age}</span></p>
               
            </div>))}
        </div>
    </div>
  )
}

import React from 'react'
import { Entity } from './Entity'

type TableRendererProps = {
  entity: Entity
  [prop: string]: unknown
}

function TableRenderer({ entity, ...props }:TableRendererProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2>{entity.name}</h2>
      <table>
        <thead>
          {entity.attributes.map((attribute) => {
            return <th key={attribute.label}>{attribute.label}</th>
          })}  
        </thead>
        <tbody>
          {entity.attributes.map((attribute) => {
            return <td key={attribute.label}>{attribute.renderTableField()}</td>
          })}
        </tbody>
      </table>
      
    </div>
  )
}

export default TableRenderer
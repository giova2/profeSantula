import React from 'react'
import { Attribute } from './Attribute'

type AttributeTableRendererProps = {
  attribute: Attribute
  [prop: string]: unknown
}

function AttributeTableRenderer({attribute, ...props}: AttributeTableRendererProps) {
  return (
    <div className="flex flex-col justify-start items-center">
      <h2>AttributeTableRenderer</h2>
      <span className='bg-stone-500 text-ellipsis'>{attribute.key}</span>
    </div>
  )
}

export default AttributeTableRenderer
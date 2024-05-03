import React from 'react'
import { Attribute } from './Attribute'

type AttributeFormRendererProps = {
  attribute: Attribute
  [prop: string]: unknown
}

function AttributeFormRenderer({attribute, ...props}: AttributeFormRendererProps) {
  return (
    <div className="flex flex-col justify-start items-center">
      <h2>AttributeFormRenderer</h2>
      <label className='bg-stone-500 text-ellipsis'>{attribute.label}</label>
      <input className='p-2' placeholder={attribute.label}/>
    </div>
    

  )
}

export default AttributeFormRenderer
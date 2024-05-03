import React from 'react'
import { Entity } from './Entity'

export type FormRendererProps = {
  entity: Entity
  [prop: string]: unknown
}

function FormRenderer({ entity, ...props }:FormRendererProps) {
  return (
    <div className='flex justify-center items-center'>
      <form className="flex flex-col justify-center items-center" action="">
        {entity.attributes.map((attribute) => {
          return attribute.renderFormField()
        })}
      </form>
    </div>
  )
}

export default FormRenderer
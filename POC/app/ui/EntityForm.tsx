import React from 'react'
import { Entity } from '../lib/Entity'

type EntityFormProps = {
  entity: Entity
}

export default function EntityForm({entity}: EntityFormProps) {
  console.log(entity)
  return (
    entity.renderForm({})
  )
}

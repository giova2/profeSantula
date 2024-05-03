import React from 'react'
import { Entity } from '../lib/Entity'
import { Attribute } from '../lib/attributes/Attribute'

type EntityTableProps = {
  entity: Entity
}

export default function EntityTable({entity}: EntityTableProps) {
  return (
    entity.renderTable({})
  )
}

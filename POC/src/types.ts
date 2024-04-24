export enum EntityTypeEnum {
  FORM = 'form',
  DISPLAY = 'display',
  BDD = 'bdd',
  API = 'api',
}

export enum AttributeTypeEnum {
  IDENTIFIER = 'id',
  NAME = 'name',
  IMAGE = 'image',
  DATE = 'date',
}

type Attribute = {
  key: string
  label?: string
  type: AttributeTypeEnum
  relationField?: string
  icon?: string
}

export type Entity = {
  type: EntityTypeEnum,
  name: string,
  attributes: Attribute[]
  children: Entity[]
}
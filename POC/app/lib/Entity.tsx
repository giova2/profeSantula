import { Attribute } from "./attributes/Attribute"
import { EntityTypeEnum } from "./enums"

export class Entity {

  type: EntityTypeEnum
  name: string
  attributes: Attribute[] = []
  children: Entity[] = []
  renderForm: (props: unknown) => JSX.Element = () => (<span>Entity render Form not defined</span>)
  renderTable: (props: any) => JSX.Element = () => (<span>Entity render Table not defined</span>)

  constructor(name:string, type: EntityTypeEnum = EntityTypeEnum.TABLE){
    this.name = name
    this.type = type
  }
  
}
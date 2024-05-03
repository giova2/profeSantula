import { AttributeTypeEnum } from "../enums"

export class Attribute {
  key: string
  label?: string
  type: AttributeTypeEnum
  relationField?: string
  icon?: string
  renderFormField: () => JSX.Element = () => (<span>Attribute render Form Field not defined</span>)
  renderTableField: () => JSX.Element = () => (<span>Attribute render Table Field not defined</span>)

  constructor(key:string, type:AttributeTypeEnum){
    this.key = key
    this.type = type
  }
}
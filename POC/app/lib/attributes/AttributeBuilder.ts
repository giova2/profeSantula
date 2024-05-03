import { AttributeTypeEnum } from "../enums";
import { Attribute } from "./Attribute";
import AttributeFormRenderer from "./AttributeFormRenderer";
import AttributeTableRenderer from "./AttributeTableRenderer";

export class AttributeBuilder {
  
  attribute: Attribute

  constructor(key:string, type:AttributeTypeEnum){
    this.attribute = new Attribute(key, type)
  }

  setKey(key:string){
    this.attribute.key = key
    return this
  }
  
  setLabel(label:string){
    this.attribute.label = label
    return this
  }

  setType(type:AttributeTypeEnum){
    this.attribute.type = type
    return this
  }
  
  setRelationField(attributeKey: string){
    this.attribute.relationField = attributeKey
    return this
  }

  setIcon(imgSrc: string){
    this.attribute.icon = imgSrc
    return this
  }

  setRenderFormField(){
    this.attribute.renderFormField = () => AttributeFormRenderer({attribute: this.attribute})
    return this
  }

  setRenderTableField(){
    this.attribute.renderTableField = () => AttributeTableRenderer({attribute: this.attribute})
    return this
  }

  getAttribute(){
    return this.attribute
  }
}



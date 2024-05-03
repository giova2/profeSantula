import React from "react";
import { Attribute } from "./attributes/Attribute";
import { Entity } from "./Entity";
import { EntityTypeEnum } from "./enums";
import FormRenderer from "./FormRenderer";
import TableRenderer from "./TableRenderer";


export class EntityBuilder {

  entity: Entity

  constructor(name:string, type: EntityTypeEnum = EntityTypeEnum.TABLE){
    this.entity = new Entity(name, type)
  }

  addChildren(...children: Entity[]){
    this.entity.children.push(...children)
  }

  addAttributes(...attributes: Attribute[]){
    this.entity.attributes.push(...attributes)
  }

  setRenderForm(){
    this.entity.renderForm = (...props) => FormRenderer({ entity: this.entity, ...props })
  }

  setRenderTable(){
    this.entity.renderTable = (...props) => TableRenderer({ entity: this.entity, ...props })
  }

  getEntity(){
    return this.entity
  }
}
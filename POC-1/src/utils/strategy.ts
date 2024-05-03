import { Entity, EntityTypeEnum } from "../types";
import { displayFactory, formFactory } from "./factory";

const factories = {
  [EntityTypeEnum.FORM]: (entity:Entity) => formFactory(entity),
  [EntityTypeEnum.TABLE]: (entity:Entity) => displayFactory(entity),
  [EntityTypeEnum.API]: () => (undefined),
  [EntityTypeEnum.BDD]: () => (undefined),
}

export function executeRightFactory(entity: Entity){
  try{
    factories[entity.type](entity)
  }catch(error){
    console.error(error)
  }
}
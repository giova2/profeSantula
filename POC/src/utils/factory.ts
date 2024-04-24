import { AttributeTypeEnum, Entity, EntityTypeEnum } from "../types";
import fs from 'fs';
import { executeRightFactory } from "./strategy";

/**
 * Entities generator
 * @param entity 
 */

export function entityGenerator(name:string, children: Entity[] = []){
  const fieldsInCommon = {
    name,
    attributes:[
      {
        key: 'id',
        label: 'Identifier',
        type: AttributeTypeEnum.IDENTIFIER,
      },
      {
        key: 'name',
        label: 'Name',
        type: AttributeTypeEnum.NAME,
      }
    ],
    children
  }
  return [
    {...fieldsInCommon, type: EntityTypeEnum.FORM },
    {...fieldsInCommon, type: EntityTypeEnum.DISPLAY}
  ]
}

function processChildren(entity:Entity) {
  let childrenNames = ''
  for(let i = 0; i< entity.children.length; i++){
    executeRightFactory(entity.children[i])
    if(childrenNames.length === 0) {
      childrenNames = `${entity.children[i].name}`
    } else {
      childrenNames = `${childrenNames}, ${entity.children[i].name}`
    }
  }
  return childrenNames
}

export function formFactory(entity: Entity) {
  const childrenNames = processChildren(entity)
  const contents = `This is a form file with children ${childrenNames}`
  const pathname = `pages/${entity.name}/[id]`
  createFilePath(pathname, contents)
}

export function displayFactory(entity: Entity) {
  const childrenNames = processChildren(entity)
  const contents = `This is a display file with children ${childrenNames}`
  const pathname = `pages/${entity.name}/index`
  createFilePath(pathname, contents)
}

function createFilePath(pathname:string, content: string){
  const pathArr = pathname.split('/')
  pathArr.pop()
  let folderName = '.'
  try {
    pathArr.forEach((folder) => {
      folderName = `${folderName}/${folder}`
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
    })
    
    fs.writeFile(pathname, content, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`file created at path ${pathname}`)
      }
    })
  } catch (err) {
    console.error(err);
  }
  
}
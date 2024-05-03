import { Entity} from "./types";
import { entityGenerator } from "./utils/factory"
import { executeRightFactory } from "./utils/strategy";

const [sectionFormEntity, sectionDisplayEntity]: Entity[] = entityGenerator('section')
const [areaFormEntity, areaDisplayEntity]: Entity[] = entityGenerator('area', [sectionFormEntity, sectionDisplayEntity])
 
executeRightFactory(areaFormEntity)
executeRightFactory(areaDisplayEntity)
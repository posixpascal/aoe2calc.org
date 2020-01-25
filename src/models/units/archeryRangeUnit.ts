import {Unit} from "../unit";
import {BuildingManager} from "../buildingManager";

export class ArcheryRangeUnit extends Unit {
    building = BuildingManager.byName("archeryRange");
}
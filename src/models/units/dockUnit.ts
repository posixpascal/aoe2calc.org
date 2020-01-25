import {Unit} from "../unit";
import {BuildingManager} from "../buildingManager";

export class DockUnit extends Unit {
    building = BuildingManager.byName("dock");
}
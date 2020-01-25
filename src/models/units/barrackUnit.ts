import {Unit} from "../unit";
import {BuildingManager} from "../buildingManager";

export class BarrackUnit extends Unit {
    building = BuildingManager.byName("barrack");
}
import {Unit} from "../unit";
import {BuildingManager} from "../buildingManager";

export class MonasteryUnit extends Unit {
    building = BuildingManager.byName("monastery");
}
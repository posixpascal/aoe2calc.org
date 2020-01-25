import {Unit} from "../unit";
import {BuildingManager} from "../buildingManager";

export class StableUnit extends Unit {
    building = BuildingManager.byName("stable");
}
import {Unit} from "../unit";
import {BuildingManager} from "../buildingManager";

export class TownCenterUnit extends Unit {
    building = BuildingManager.byName("townCenter");
}
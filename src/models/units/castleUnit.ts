import {Unit} from "../unit";
import {BuildingManager} from "../buildingManager";

export class CastleUnit extends Unit {
    building = BuildingManager.byName("castle");
}
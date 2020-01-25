import {Unit} from "../unit";
import {BuildingManager} from "../buildingManager";

export class MarketUnit extends Unit {
    building = BuildingManager.byName("market");
}
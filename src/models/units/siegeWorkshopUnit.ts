import {Unit} from "../unit";
import {BuildingManager} from "../buildingManager";

export class SiegeWorkshopUnit extends Unit {
    building = BuildingManager.byName("siegeWorkshop");
}
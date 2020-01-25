import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {SiegeWorkshopUnit} from "../siegeWorkshopUnit";

export class Scorpion extends SiegeWorkshopUnit {
    public label = "Scorpion";
    public name = "scorpion";
    public creationTime = 25;
    public icon = "080_50730";
    public baseCost: IResourceSet = {
        "wood": 75,
        "gold": 75,
    }
}
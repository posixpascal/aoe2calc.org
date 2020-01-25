import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {SiegeWorkshopUnit} from "../siegeWorkshopUnit";

export class BatteringRam extends SiegeWorkshopUnit {
    public label = "Battering Ram";
    public name = "batteringRam";
    public creationTime = 36;
    public icon = "074_50730";
    public baseCost: IResourceSet = {
        "wood": 160,
        "gold": 75
    }
}
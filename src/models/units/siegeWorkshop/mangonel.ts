import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {SiegeWorkshopUnit} from "../siegeWorkshopUnit";

export class Mangonel extends SiegeWorkshopUnit {
    public label = "Mangonel";
    public name = "mangonel";
    public creationTime = 46;
    public icon = "027_50730";
    public baseCost: IResourceSet = {
        "wood": 160,
        "gold": 135
    }
}
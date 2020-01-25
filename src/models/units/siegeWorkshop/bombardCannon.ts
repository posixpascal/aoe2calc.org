import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {SiegeWorkshopUnit} from "../siegeWorkshopUnit";

export class BombardCannon extends SiegeWorkshopUnit {
    public label = "Bombard Cannon";
    public name = "bombardCannon";
    public creationTime = 56;
    public icon = "030_50730";
    public baseCost: IResourceSet = {
        "wood": 225,
        "gold": 225
    }
}
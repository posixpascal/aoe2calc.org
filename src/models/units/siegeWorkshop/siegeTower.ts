import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {SiegeWorkshopUnit} from "../siegeWorkshopUnit";

export class SiegeTower extends SiegeWorkshopUnit {
    public label = "Siege Tower";
    public name = "siegeTower";
    public creationTime = 36;
    public icon = "212_50730";
    public baseCost: IResourceSet = {
        "wood": 200,
        "gold": 160
    }
}
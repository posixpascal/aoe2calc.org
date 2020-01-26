import {IResourceSet} from "../../../interface";
import {ArcheryRangeUnit} from "../archeryRangeUnit";

export class HandCannoneer extends ArcheryRangeUnit {
    public label = "Hand Cannoneer";
    public name = "handCannoneer";
    public creationTime = 34;
    public icon = "022_50730";
    public baseCost: IResourceSet = {
        "food": 45,
        "gold": 50
    }
}
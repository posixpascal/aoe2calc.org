import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {ArcheryRangeUnit} from "../archeryRangeUnit";

export class HandCannoneer extends ArcheryRangeUnit {
    public label = "Hand Cannoneer";
    public name = "handCannoneer";
    public creationTime = 34;
    // randomly choose male and female version
    public icon = "022_50730";
    public baseCost: IResourceSet = {
        "food": 45,
        "gold": 50
    }
}
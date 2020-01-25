import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {ArcheryRangeUnit} from "../archeryRangeUnit";

export class Skirmisher extends ArcheryRangeUnit {
    public label = "Skirmisher";
    public name = "skirmisher";
    public creationTime = 22;
    public icon = "020_50730";
    public baseCost: IResourceSet = {
        "food": 25,
        "wood": 35
    }
}
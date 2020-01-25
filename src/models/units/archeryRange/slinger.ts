import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {ArcheryRangeUnit} from "../archeryRangeUnit";

export class Slinger extends ArcheryRangeUnit {
    public label = "Slinger";
    public name = "slinger";
    public creationTime = 25;
    public icon = "143_50730";
    public baseCost: IResourceSet = {
        "food": 30,
        "gold": 40
    }
}
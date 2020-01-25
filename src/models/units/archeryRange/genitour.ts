import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {ArcheryRangeUnit} from "../archeryRangeUnit";

export class Genitour extends ArcheryRangeUnit {
    public label = "Genitour";
    public name = "genitour";
    public creationTime = 25;
    public icon = "201_50730";
    public baseCost: IResourceSet = {
        "food": 50,
        "wood": 35
    }
}
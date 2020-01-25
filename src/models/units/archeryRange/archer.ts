import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {ArcheryRangeUnit} from "../archeryRangeUnit";

export class Archer extends ArcheryRangeUnit {
    public label = "Archer";
    public name = "archer";
    public creationTime = 35;
    public icon = "017_50730";
    public baseCost: IResourceSet = {
        "wood": 25,
        "gold": 45
    }
}
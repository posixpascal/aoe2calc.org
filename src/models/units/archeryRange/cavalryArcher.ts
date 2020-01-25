import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {ArcheryRangeUnit} from "../archeryRangeUnit";

export class CavalryArcher extends ArcheryRangeUnit {
    public label = "Cavalry Archer";
    public name = "cavalryArcher";
    public creationTime = 34;
    public icon = "019_50730";
    public baseCost: IResourceSet = {
        "wood": 40,
        "gold": 60
    }
}
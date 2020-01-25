import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {BarrackUnit} from "../barrackUnit";

export class Spearman extends BarrackUnit {
    public label = "Spearman";
    public name = "spearman";
    public creationTime = 22;
    public icon = "031_50730";
    public baseCost: IResourceSet = {
        "food": 35,
        "wood": 25
    }
}
import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {BarrackUnit} from "../barrackUnit";

export class EagleScout extends BarrackUnit {
    public label = "Eagle Scout";
    public name = "eagleScout";
    public creationTime = 60;
    public icon = "109_50730";
    public baseCost: IResourceSet = {
        "food": 20,
        "gold": 50
    }
}
import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {Barrack} from "../../buildings/barrack";
import {BarrackUnit} from "../barrackUnit";

export class Militia extends BarrackUnit {
    public label = "Militia";
    public name = "militia";
    public creationTime = 21;
    public icon = "008_50730";
    public baseCost: IResourceSet = {
        "food": 60,
        "gold": 20
    }
}
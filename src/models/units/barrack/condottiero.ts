import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {BarrackUnit} from "../barrackUnit";

export class Condottiero extends BarrackUnit {
    public label = "Condottiero";
    public name = "condottiero";
    public creationTime = 18;
    public icon = "134_50730";
    public baseCost: IResourceSet = {
        "food": 50,
        "gold": 35
    }
}
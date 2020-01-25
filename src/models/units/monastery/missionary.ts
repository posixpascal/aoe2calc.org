import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {MonasteryUnit} from "../monasteryUnit";

export class Missionary extends MonasteryUnit {
    public label = "Missionary";
    public name = "missionary";
    public creationTime = 51;
    public icon = "107_50730";
    public baseCost: IResourceSet = {
        "gold": 100
    }
}
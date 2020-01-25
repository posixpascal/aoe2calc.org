import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {MonasteryUnit} from "../monasteryUnit";

export class Monk extends MonasteryUnit {
    public label = "Monk";
    public name = "monk";
    public creationTime = 51;
    public icon = "033_50730";
    public baseCost: IResourceSet = {
        "gold": 100
    }
}
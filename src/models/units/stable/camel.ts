import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {StableUnit} from "../stableUnit";

export class Camel extends StableUnit {
    public label = "Camel";
    public name = "camel";
    public creationTime = 22;
    public icon = "078_50730";
    public baseCost: IResourceSet = {
        "food": 55,
        "gold": 60
    }
}
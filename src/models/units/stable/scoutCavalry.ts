import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {StableUnit} from "../stableUnit";

export class ScoutCavalry extends StableUnit {
    public label = "Scout Cavalry";
    public name = "scoutCavalry";
    public creationTime = 30;
    public icon = "064_50730";
    public baseCost: IResourceSet = {
        "food": 80
    }
}
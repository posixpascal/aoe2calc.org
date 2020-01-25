import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {StableUnit} from "../stableUnit";

export class BattleElephant extends StableUnit {
    public label = "Battle Elephant";
    public name = "battleElephant";
    public creationTime = 28;
    public icon = "228_50730";
    public baseCost: IResourceSet = {
        "food": 120,
        "gold": 70
    }
}
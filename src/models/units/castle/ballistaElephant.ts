import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class BallistaElephant extends CastleUnit {
    public label = "Ballista Elephant";
    public name = "ballistaElephant";
    public creationTime = 25;
    public icon = "231_50730";
    public baseCost: IResourceSet = {
        "food": 100,
        "gold": 80
    }
}
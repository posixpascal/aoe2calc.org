import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class ThrowingAxeman extends CastleUnit {
    public label = "Throwing Axeman";
    public name = "throwingAxeman";
    public creationTime = 17;
    public icon = "046_50730";
    public baseCost: IResourceSet = {
        "food": 85,
        "gold": 40
    }
}
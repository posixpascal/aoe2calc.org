import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class WarElephant extends CastleUnit {
    public label = "War Elephant";
    public name = "warElephant";
    public creationTime = 31;
    public icon = "043_50730";
    public baseCost: IResourceSet = {
        "food": 200,
        "gold": 75
    }
}
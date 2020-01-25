import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Gbeto extends CastleUnit {
    public label = "Gbeto";
    public name = "gbeto";
    public creationTime = 17;
    public icon = "197_50730";
    public baseCost: IResourceSet = {
        "food": 50,
        "gold": 40
    }
}
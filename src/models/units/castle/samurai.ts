import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Samurai extends CastleUnit {
    public label = "Samurai";
    public name = "samurai";
    public creationTime = 9;
    public icon = "044_50730";
    public baseCost: IResourceSet = {
        "food": 60,
        "gold": 30
    }
}
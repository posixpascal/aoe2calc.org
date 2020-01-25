import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Cataphract extends CastleUnit {
    public label = "Cataphract";
    public name = "cataphract";
    public creationTime = 20;
    public icon = "035_50730";
    public baseCost: IResourceSet = {
        "food": 70,
        "gold": 75
    }
}
import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Mameluke extends CastleUnit {
    public label = "Mameluke";
    public name = "mameluke";
    public creationTime = 23;
    public icon = "037_50730";
    public baseCost: IResourceSet = {
        "food": 55,
        "gold": 85
    }
}
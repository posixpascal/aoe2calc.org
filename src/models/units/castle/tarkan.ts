import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Tarkan extends CastleUnit {
    public label = "Tarkan";
    public name = "tarkan";
    public creationTime = 21.7;
    public icon = "105_50730";
    public baseCost: IResourceSet = {
        "food": 60,
        "gold": 60
    }
}
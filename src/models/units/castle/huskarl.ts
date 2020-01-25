import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Huskarl extends CastleUnit {
    public label = "Huskarl";
    public name = "huskarl";
    public creationTime = 16;
    public icon = "050_50730";
    public baseCost: IResourceSet = {
        "food": 52,
        "gold": 26
    }
}
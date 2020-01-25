import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Trebuchet extends CastleUnit {
    public label = "Trebuchet";
    public name = "trebuchet";
    public creationTime = 50;
    public icon = "028_50730";
    public baseCost: IResourceSet = {
        "wood": 200,
        "gold": 200
    }
}
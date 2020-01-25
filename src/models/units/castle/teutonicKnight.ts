import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class TeutonicKnight extends CastleUnit {
    public label = "Teutonic Knight";
    public name = "teutonicKnight";
    public creationTime = 12;
    public icon = "045_50730";
    public baseCost: IResourceSet = {
        "food": 85,
        "gold": 40
    }
}
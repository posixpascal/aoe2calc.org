import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class GenoeseCrossbowman extends CastleUnit {
    public label = "Genoese Crossbowman";
    public name = "genoeseCrossbowman";
    public creationTime = 22;
    public icon = "133_50730";
    public baseCost: IResourceSet = {
        "food": 45,
        "gold": 45
    }
}
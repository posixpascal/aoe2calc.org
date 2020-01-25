import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Longbowman extends CastleUnit {
    public label = "Longbowman";
    public name = "longbowman";
    public creationTime = 18;
    public icon = "041_50730";
    public baseCost: IResourceSet = {
        "wood": 35,
        "gold": 40
    }
}
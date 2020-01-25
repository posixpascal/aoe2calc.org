import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Berserk extends CastleUnit {
    public label = "Berserk";
    public name = "berserk";
    public creationTime = 14;
    public icon = "038_50730";
    public baseCost: IResourceSet = {
        "food": 65,
        "gold": 25
    }
}
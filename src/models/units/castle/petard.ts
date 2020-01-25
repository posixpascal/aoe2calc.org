import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Petard extends CastleUnit {
    public label = "Petard";
    public name = "petard";
    public creationTime = 25;
    public icon = "058_50730";
    public baseCost: IResourceSet = {
        "food": 65,
        "gold": 20
    }
}
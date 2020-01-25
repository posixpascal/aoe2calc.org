import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Conquistador extends CastleUnit {
    public label = "Conquistador";
    public name = "conquistador";
    public creationTime = 24;
    public icon = "106_50730";
    public baseCost: IResourceSet = {
        "food": 60,
        "gold": 70
    }
}
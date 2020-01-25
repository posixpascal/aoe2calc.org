import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class MagyarHuszar extends CastleUnit {
    public label = "Magyar Huszar";
    public name = "magyarHuszar";
    public creationTime = 16;
    public icon = "099_50730";
    public baseCost: IResourceSet = {
        "food": 80,
        "gold": 10
    }
}
import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Boyar extends CastleUnit {
    public label = "Boyar";
    public name = "boyar";
    public creationTime = 23;
    public icon = "114_50730";
    public baseCost: IResourceSet = {
        "food": 50,
        "gold": 80
    }
}
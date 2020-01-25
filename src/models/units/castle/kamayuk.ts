import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Kamayuk extends CastleUnit {
    public label = "Kamayuk";
    public name = "kamayuk";
    public creationTime = 10;
    public icon = "097_50730";
    public baseCost: IResourceSet = {
        "food": 60,
        "gold": 30
    }
}
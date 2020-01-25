import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class WarWagon extends CastleUnit {
    public label = "War Wagon";
    public name = "warWagon";
    public creationTime = 21;
    public icon = "117_50730";
    public baseCost: IResourceSet = {
        "wood": 110,
        "gold": 60
    }
}
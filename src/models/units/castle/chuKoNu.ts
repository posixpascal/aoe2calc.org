import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class ChuKoNu extends CastleUnit {
    public label = "Chu Ko Nu";
    public name = "chuKoNu";
    public creationTime = 16;
    public icon = "036_50730";
    public baseCost: IResourceSet = {
        "wood": 40,
        "gold": 35
    }
}
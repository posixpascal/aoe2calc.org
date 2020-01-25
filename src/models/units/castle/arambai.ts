import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Arambai extends CastleUnit {
    public label = "Arambai";
    public name = "arambai";
    public creationTime = 21;
    // randomly choose male and female version
    public icon = "230_50730";
    public baseCost: IResourceSet = {
        "wood": 80,
        "gold": 60
    }
}
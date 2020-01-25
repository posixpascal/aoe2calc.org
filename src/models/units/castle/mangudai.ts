import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Mangudai extends CastleUnit {
    public label = "Mangudai";
    public name = "mangudai";
    public creationTime = 25;
    public icon = "042_50730";
    public baseCost: IResourceSet = {
        wood: 55,
        gold: 65
    }
}
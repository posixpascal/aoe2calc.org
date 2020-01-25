import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class ShotelWarrior extends CastleUnit {
    public label = "ShotelWarrior";
    public name = "shotelWarrior";
    public creationTime = 8;
    public icon = "195_50730";
    public baseCost: IResourceSet = {
        "food": 50,
        "gold": 35
    }
}
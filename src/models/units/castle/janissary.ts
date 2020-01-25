import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class Janissary extends CastleUnit {
    public label = "Janissary";
    public name = "janissary";
    public creationTime = 17;
    public icon = "039_50730";
    public baseCost: IResourceSet = {
        "food": 60,
        "gold": 55
    }
}
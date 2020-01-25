import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class ElephantArcher extends CastleUnit {
    public label = "Elephant Archer";
    public name = "elephantArcher";
    public creationTime = 25;
    public icon = "093_50730";
    public baseCost: IResourceSet = {
        "food": 100,
        "gold": 80
    }
}
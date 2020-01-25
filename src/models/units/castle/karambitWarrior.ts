import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class KarambitWarrior extends CastleUnit {
    public label = "Karambit Warrior";
    public name = "karambitWarrior";
    public creationTime = 6;
    public icon = "233_50730";
    public baseCost: IResourceSet = {
        "food": 30,
        "gold": 15
    }
}
import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class JaguarWarrior extends CastleUnit {
    public label = "Jaguar Warrior";
    public name = "jaguarWarrior";
    public creationTime = 17;
    public icon = "110_50730";
    public baseCost: IResourceSet = {
        "food": 60,
        "gold": 30
    }
}
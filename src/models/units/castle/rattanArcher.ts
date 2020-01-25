import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class RattanArcher extends CastleUnit {
    public label = "Rattan Archer";
    public name = "rattanArcher";
    public creationTime = 16;
    public icon = "232_50730";
    public baseCost: IResourceSet = {
        "wood": 50,
        "gold": 45
    }
}
import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class PlumedArcher extends CastleUnit {
    public label = "Plumed Archer";
    public name = "plumedArcher";
    public creationTime = 16;
    public icon = "108_50730";
    public baseCost: IResourceSet = {
        "wood": 40,
        "gold": 40
    }
}
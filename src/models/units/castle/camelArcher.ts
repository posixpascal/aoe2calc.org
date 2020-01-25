import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class CamelArcher extends CastleUnit {
    public label = "Camel Archer";
    public name = "camelArcher";
    public creationTime = 21;
    public icon = "191_50730";
    public baseCost: IResourceSet = {
        "wood": 50,
        "gold": 60
    }
}
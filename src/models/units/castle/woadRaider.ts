import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class WoadRaider extends CastleUnit {
    public label = "Woad Raider";
    public name = "woadRaider";
    public creationTime = 10;
    public icon = "047_50730";
    public baseCost: IResourceSet = {
        "food": 65,
        "gold": 25
    }
}
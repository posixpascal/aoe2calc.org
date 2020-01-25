import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CastleUnit} from "../castleUnit";

export class OrganGun extends CastleUnit {
    public label = "Organ Gun";
    public name = "organGun";
    public creationTime = 21;
    public icon = "190_50730";
    public baseCost: IResourceSet = {
        "wood": 80,
        "gold": 60
    }
}
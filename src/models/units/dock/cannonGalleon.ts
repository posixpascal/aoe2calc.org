import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";

export class CannonGalleon extends DockUnit {
    public label = "Cannon Galleon";
    public name = "cannonGalleon";
    public creationTime = 46;
    public icon = "055_50730";
    public baseCost: IResourceSet = {
        "wood": 200,
        "gold": 150
    }
}
import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";

export class Galley extends DockUnit {
    public label = "Galley";
    public name = "galley";
    public creationTime = 60;
    public icon = "087_50730";
    public baseCost: IResourceSet = {
        "wood": 90,
        "gold": 30
    }
}
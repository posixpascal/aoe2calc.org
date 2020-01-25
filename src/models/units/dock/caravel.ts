import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";

export class Caravel extends DockUnit {
    public label = "Caravel";
    public name = "caravel";
    public creationTime = 36;
    // randomly choose male and female version
    public icon = "198_50730";
    public baseCost: IResourceSet = {
        "wood": 90,
        "gold": 40
    }
}
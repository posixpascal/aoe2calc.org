import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {BatteringRam} from "./batteringRam";
import {CappedRam} from "./cappedRam";

export class SiegeRam extends CappedRam {
    public label = "Siege Ram";
    public name = "siegeRam";
    public creationTime = 36;
    public icon = "073_50730";
    public baseCost: IResourceSet = {
        "wood": 160,
        "gold": 75
    }
}
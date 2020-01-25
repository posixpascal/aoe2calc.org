import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {BatteringRam} from "./batteringRam";

export class CappedRam extends BatteringRam {
    public label = "Capped Ram";
    public name = "cappedRam";
    public creationTime = 36;
    public icon = "063_50730";
    public baseCost: IResourceSet = {
        "wood": 160,
        "gold": 75
    }
}
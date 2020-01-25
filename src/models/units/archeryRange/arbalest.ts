import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {ArcheryRangeUnit} from "../archeryRangeUnit";
import {Crossbowman} from "./crossbowman";

export class Arbalest extends Crossbowman {
    public label = "Arbalest";
    public name = "arbalest";
    public creationTime = 27;
    public icon = "090_50730";
    public baseCost: IResourceSet = {
        "wood": 25,
        "gold": 45
    }
}
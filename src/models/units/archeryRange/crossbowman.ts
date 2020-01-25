import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {Archer} from "./archer";
import {ArcheryRangeUnit} from "../archeryRangeUnit";

export class Crossbowman extends Archer {
    public label = "Crossbowman";
    public name = "crossbowman";
    public creationTime = 27;
    public icon = "018_50730";
}
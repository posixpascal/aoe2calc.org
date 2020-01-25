import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {ScoutCavalry} from "./scoutCavalry";

export class LightCavalry extends ScoutCavalry {
    public label = "Light Cavalry";
    public name = "lightCavalry";
    public creationTime = 30;
    public icon = "091_50730";
}
import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {CavalryArcher} from "./cavalryArcher";

export class HeavyCavalryArcher extends CavalryArcher {
    public label = "Heavy Cavalry Archer";
    public name = "heavyCavalryArcher";
    public creationTime = 25;
    public icon = "071_50730";
    public baseCost: IResourceSet = {
        "wood": 40,
        "gold": 60
    }
}
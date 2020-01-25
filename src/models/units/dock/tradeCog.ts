import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";

export class TradeCog extends DockUnit {
    public label = "Trade Cog";
    public name = "tradeCog";
    public creationTime = 36;
    public icon = "023_50730";
    public baseCost: IResourceSet = {
        "wood": 100,
        "gold": 50
    }
}
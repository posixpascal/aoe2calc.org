import {IResourceSet} from "../interface";
import {Building} from "./building";
import {TownCenter} from "./buildings/townCenter";

export class Unit {
    public label = "";
    public name = "";
    public icon = "";

    public baseCost : IResourceSet = {};
    public building : Building = new TownCenter();
}
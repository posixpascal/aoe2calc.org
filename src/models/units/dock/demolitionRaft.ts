import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";

export class DemolitionRaft extends DockUnit {
    public label = "Demolition Raft";
    public name = "demolitionRaft";
    public creationTime = 45;
    public icon = "202_50730";
    public baseCost: IResourceSet = {
        "wood": 70,
        "gold": 50
    }
}
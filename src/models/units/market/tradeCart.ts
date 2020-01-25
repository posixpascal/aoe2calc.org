import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {Market} from "../../buildings/market";
import {MarketUnit} from "../marketUnit";

export class TradeCart extends MarketUnit {
    public label = "Trade Cart";
    public name = "tradeCart";
    public creationTime = 50;
    public icon = "034_50730";
    public baseCost: IResourceSet = {
        "wood": 100,
        "gold": 50
    }
}
import React from "react";
import {IResource, IResourceSet, ISettings} from "../interface";
import {ResourceIcon} from "./resourceIcon";
import {UnitIcon} from "./unitIcon";
import {UnitManager} from "../models/unitManager";
import {Villager} from "../models/units/townCenter/villager";
import {capitalize} from "../utils";
import {Tooltip} from "antd";

interface IVillagerRequirementsComponent {
    resources: IResourceSet;
    multiplier?: number;
    rounding?: boolean;
    iconSize?: number;
    collectionRate?:boolean;
    padding?:boolean;
}

export const VillagerRequirements = ({padding = true, iconSize=24, collectionRate=true,rounding = true, multiplier = 1, resources}: IVillagerRequirementsComponent) => {
    const villagerUnit : Villager = UnitManager.byName("villager") as Villager;
    return <>
        {Object.keys(resources).map((resName: any) => {
            const targetNumber = (resources as any)[resName] * multiplier;
            const numVillsDecimal = targetNumber / villagerUnit.gatherRateOf(resName);
            const numVills = rounding ? Math.round(numVillsDecimal) : numVillsDecimal.toFixed(2);

            return <span key={resName} style={padding ? {paddingRight: "8px", paddingLeft: "8px"}: {}}>
                <UnitIcon unit={villagerUnit} size={iconSize}/>
                <strong style={{paddingLeft: "4px"}}>{numVills}</strong> on <ResourceIcon inline={true} resource={resName} size={16}/> {capitalize(resName)} {collectionRate && <>(<Tooltip title={"Collection Rate"}>{villagerUnit.gatherRateOf(resName)}/s</Tooltip>)</>}
                </span>
        })}
    </>
};
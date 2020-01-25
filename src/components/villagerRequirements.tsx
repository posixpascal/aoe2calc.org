import React from "react";
import {IResource, IResourceSet, ISettings} from "../interface";
import {ResourceIcon} from "./resourceIcon";
import {UnitIcon} from "./unitIcon";
import {UnitManager} from "../models/unitManager";
import {Villager} from "../models/units/townCenter/villager";
import {capitalize} from "../utils";

interface IVillagerRequirementsComponent {
    resources: IResourceSet;
    multiplier?: number;
}

export const VillagerRequirements = ({multiplier = 1, resources}: IVillagerRequirementsComponent) => {
    const villagerUnit : Villager = UnitManager.byName("villager") as Villager;
    return <>
        {Object.keys(resources).map((resName: any) => {
            const targetNumber = (resources as any)[resName] * multiplier;
            const numVills = Math.round(targetNumber / villagerUnit.gatherRateOf(resName));

            return <span key={resName} style={{paddingRight: "8px", paddingLeft: "8px"}}>
                <UnitIcon unit={villagerUnit} size={24}/>
                <strong style={{paddingLeft: "4px"}}>{numVills}</strong> on <ResourceIcon inline={true} resource={resName} size={16}/> {capitalize(resName)}
                </span>
        })}
    </>
};
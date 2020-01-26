import React from "react";
import {IResource, IResourceSet, ISettings} from "../interface";
import {Col, Descriptions, Icon, Row} from "antd";
import {CivIcon} from "./civIcon";
import {AgeIcon} from "./ageIcon";
import {ResourceIcon} from "./resourceIcon";

interface IResourcesListComponent {
    resources: IResourceSet;
    multiplier?: number;
    rounding? :boolean;
}

export const ResourcesList = ({rounding = true, multiplier = 1, resources}: IResourcesListComponent) => {
    return <>
        {Object.keys(resources).map((resName: any) => {
            const resAmount = rounding ? Math.ceil((resources as any)[resName] * multiplier) : (resources as any)[resName] * multiplier;
            return <span key={resName} style={{paddingRight: "3px", paddingLeft: "3px"}}><ResourceIcon inline={true} resource={resName} size={16}/>
                {resAmount}</span>
        })}
    </>
};
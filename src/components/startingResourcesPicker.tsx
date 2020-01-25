import React, {ReactNode} from "react";

import {Descriptions, InputNumber, Select} from "antd";
import {Civilization} from "../models/civilization";
import {CivilizationManager} from "../models/civilizationManager";
import {CivIcon} from "./civIcon";
import {Age} from "../models/age";
import {AgeManager} from "../models/ageManager";
import {AgeIcon} from "./ageIcon";
import {IResource, IResourceSet} from "../interface";
import {ResourceIcon} from "./resourceIcon";

const {Option} = Select;

interface IStartingResourcesPicker {
    current: IResourceSet,
    onChange: Function;
}

export const StartingResourcesPicker = ({current, onChange}: IStartingResourcesPicker) => {

    const update = (resource: IResource): any => {
        return (newValue: number) => {
            onChange({...current, [resource]: newValue});
        }
    };

    return <div>
        <Descriptions bordered>
            {
                ["wood", "food", "gold", "stone"].map((resource: IResource) => {
                    // TODO: type struggle here :(
                    const defaultValue = (current as any)[resource];
                    return <Descriptions.Item span={3} label={<ResourceIcon resource={resource}/>}>
                        <InputNumber size="large" min={1} step={100} max={100000} defaultValue={defaultValue}
                                     onChange={update(resource)}/>
                    </Descriptions.Item>
                })}
        </Descriptions>
    </div>
};
import React from "react";
import {Civilization} from "../models/civilization";
import {Tooltip} from "antd";
import {Age} from "../models/age";
import {IResource} from "../interface";
import {capitalize} from "../utils";

interface IResourceIconComponent {
    resource: IResource;
    size?: number;
    inline?: boolean;
}

export const ResourceIcon = ({resource, size = 32, inline = false}: IResourceIconComponent) => {
    const title = capitalize(resource);
    const image =  <img src={`/game_assets/resources/resource_${resource}_transparent.png`}
                        width={size}/>;

    if (inline){
        return image;
    }

    return <Tooltip title={title}>
        {image}
    </Tooltip>;
};
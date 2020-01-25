import React from "react";
import {Civilization} from "../models/civilization";
import {Tooltip} from "antd";
import {Age} from "../models/age";
import {Building} from "../models/building";
import {capitalize} from "../utils";

interface IBuildingIconComponent {
    building: Building;
    size?: number
}

export const BuildingIcon = ({building, size = 64}: IBuildingIconComponent) => {
    return <Tooltip title={capitalize(building.name)}>
        <img src={`/game_assets/buildings/${building.icon.toLowerCase()}.png`}
             width={size}/>
    </Tooltip>;
};
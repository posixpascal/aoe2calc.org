import React from "react";
import {Civilization} from "../models/civilization";
import {Avatar, Tooltip} from "antd";
import {Unit} from "../models/unit";

interface IUnitIconComponent {
    unit: Unit;
    size?: number
}

export const UnitIcon = ({unit, size = 64}: IUnitIconComponent) => {
    return <Tooltip title={unit.label}>
        <Avatar src={`/game_assets/units/${unit.icon.toLowerCase()}.png`} size={size}/>
    </Tooltip>;
};
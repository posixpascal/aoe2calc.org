import React from "react";
import {Civilization} from "../models/civilization";
import {Tooltip} from "antd";

interface ICivIconComponent {
    civ: Civilization;
    size?: number
}

export const CivIcon = ({civ, size = 64}: ICivIconComponent) => {
    return <Tooltip title={civ.name}>
        <img src={`/game_assets/civs/${civ.name.toLowerCase()}.png`}
             width={size}/>
    </Tooltip>;
};
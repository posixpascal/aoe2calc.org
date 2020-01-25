import React from "react";
import {Civilization} from "../models/civilization";
import {Tooltip} from "antd";
import {Age} from "../models/age";

interface IAgeIconComponent {
    age: Age;
    size?: number
}

export const AgeIcon = ({age, size = 64}: IAgeIconComponent) => {
    return <Tooltip title={age.label}>
        <img src={`/game_assets/ages/${age.icon.toLowerCase()}.png`}
             width={size}/>
    </Tooltip>;
};
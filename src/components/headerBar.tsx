import React from "react";
import {IResource, ISettings} from "../interface";
import {Col, Descriptions, Icon, Row} from "antd";
import {CivIcon} from "./civIcon";
import {AgeIcon} from "./ageIcon";
import {ResourceIcon} from "./resourceIcon";

interface IHeaderBarComponent {
    settings: ISettings;
}

export const HeaderBar = ({settings}: IHeaderBarComponent) => {
    return <Descriptions bordered title="Settings">
        <Descriptions.Item label="Your Civ">
            <CivIcon size={32} civ={settings.civilization} /> {settings.civilization.name}
        </Descriptions.Item>
        <Descriptions.Item label="Teammates">
            {settings.team.length == 0 && "None"}
            {settings.team.length > 0 && settings.team.map((teamCiv) => {
                return <CivIcon key={teamCiv.name} size={32} civ={teamCiv} />
            })}
        </Descriptions.Item>
        <Descriptions.Item label="All Techs?">
            {settings.isAllTech ? <Icon type="check-circle" /> : <Icon type="stop" />}
        </Descriptions.Item>

        <Descriptions.Item label="Nomad Start?">
            {settings.isNomadStart ? <Icon type="check-circle" /> : <Icon type="stop" />}
        </Descriptions.Item>

        <Descriptions.Item label="Starting Age">
            <AgeIcon size={24} age={settings.startingAge} />
        </Descriptions.Item>
        <Descriptions.Item label="Starting Resources">
            <Row gutter={16}>
            {["wood", "food", "gold", "stone"].map((resource: string) => {
                return <Col key={resource} span={6}>
                    <ResourceIcon inline={true} resource={resource} size={16} />
                    {/** TODO: type struggle here :( */}
                    {(settings.startingResources as any)[resource]}
                </Col>
            })}
            </Row>
        </Descriptions.Item>
    </Descriptions>
};
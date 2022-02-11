import React from 'react';
import { SmallButton } from './style';
export default ({ title, icon, ...props }) => (
    <SmallButton {...props}>{icon} {title}</SmallButton>
)
import React from 'react';
import {} from './style';
export default ({ title, ...props }) => (
    <Button {...props}>{title}</Button>
)
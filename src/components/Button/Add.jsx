import React from 'react';
export default ({ title, ...props }) => (
    <Button {...props}>{title}</Button>
)
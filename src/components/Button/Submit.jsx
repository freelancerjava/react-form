import React from 'react'
import { Button } from './style'
export default ({ title, ...props }) => (
    <Button height={42} {...props}>{title}</Button>
)
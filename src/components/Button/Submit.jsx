import React from 'react'
import { Button } from './style'
export default ({ title, ...props }) => (
    <Button {...props}>{title}</Button>
)
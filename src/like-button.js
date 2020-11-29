'use strict'

import React from 'react';
import Button from './button';

const LikeButton = () => (
    <Button handleClick={() => alert('like')}>
        <span>Texto do jorge</span>
    </Button>
)

export default LikeButton

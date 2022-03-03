#!/bin/bash

mkdir -p src/components/$1;
touch src/components/$1/$1.js
touch src/components/$1/$1.css

tee -a <<EOF

import React from 'react';
import '$1.css'

function $1(){
    return (
        <>
        </>
    )
}

export default $1;
EOF

import React, { useState } from 'react'

const usebgColorHooks = () => {
    const [white, setWhite] = useState(false);
    const toggle = () => {

        setWhite(prewhite => !prewhite)
    }
  return {toggle , white}
}

export default usebgColorHooks
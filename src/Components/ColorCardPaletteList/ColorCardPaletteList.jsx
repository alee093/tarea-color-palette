import React, {useState} from "react";
import "./ColorCardPaletteList.css"
import ColorCardPalette from "../ColorCardPalette/ColorCardPalette"

const ColorCardPaletteList = ({colors}) => {
    return(
        <>
            {colors.map((color) => {
                return (
                    <div>
                        <ColorCardPalette likes={color.likes} time={color.time} colors={color.colors} key={color.id} />
                    </div>
                )
            })}
        </>
    )
}

export default ColorCardPaletteList
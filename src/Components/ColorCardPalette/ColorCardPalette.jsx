import React, {useState} from "react";
import "./ColorCardPalette.css"

const ColorCardPalette = ({likes: initialLikes, time, colors}) => {
    const [likes, setLikes] = useState(initialLikes)
    const [isLiked, setIsLiked] = useState(false)

    return(
        <div className="color-card">
            <div className="color-card-palette">
                <div className="color-0" style={{background: colors[0]}}>
                    <span className="color-text">
                        {colors[0]}   
                    </span>
                </div>
                <div className="color-1" style={{background: colors[1]}}>
                    <span className="color-text">
                        {colors[1]}   
                    </span>
                </div>
                <div className="color-2" style={{background: colors[2]}}>
                    <span className="color-text">
                        {colors[2]}   
                    </span>
                </div>
                <div className="color-3" style={{background: colors[3]}}>
                    <span className="color-text">
                        {colors[3]}   
                    </span>
                </div>
            </div>
            <div className="color-card-footer">
                <button className="button-likes" onClick={() => {
                    if (isLiked) {
                        setLikes(likes - 1)
                    } 
                    else {
                        setLikes(likes + 1)
                    }
                    setIsLiked(!isLiked)
                }}>
                    <i className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"}`} style={{ color: isLiked ? "red" : "black" }}></i>
                    <div className="color-card-likes">{likes}</div>
                </button>
                <span className="color-card-time">{time}</span>
            </div>
        </div>
    )
}

export default ColorCardPalette
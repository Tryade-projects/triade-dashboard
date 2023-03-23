import React from 'react'
import { Link } from "react-router-dom"


const ButtonSeeMore = () => {
    return (
        <div className="buttonSeeMore">
            <Link to="/employees">
                <button>
                    En voir plus
                </button>
            </Link>
        </div>
    )
}

export default ButtonSeeMore
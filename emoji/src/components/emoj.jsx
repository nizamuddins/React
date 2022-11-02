import React from "react"

function Emojis(props){

return (
<div className="term">
<span className="span">{props.emoj}</span>
<dt>{props.name}</dt>
<dd>{props.meaning}</dd>
</div>
)
}

export default Emojis;
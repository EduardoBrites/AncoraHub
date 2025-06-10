
function Label({ text, img }){

    return(
        <>
            <div className="label">
                <img src={img}/>
                <p class="fontStyle">{text}</p>
            </div>
        </>
    )
}

export default Label
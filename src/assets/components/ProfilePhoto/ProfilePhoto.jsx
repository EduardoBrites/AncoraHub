function ProfilePhoto({ img, name }){
    
    return(
        <>
            <div className="profileComposition">
                <img src={img}/>
                <p className="fontStyle">{name}</p>
            </div>
        </>
    )
}

export default ProfilePhoto
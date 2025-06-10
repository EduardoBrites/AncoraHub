function SubmitImageButton({ img, alt }){

    return(
        <>
            <button type="submit" className="imageSubmitButton"><img src={img} alt={alt} className="imageButton"></img></button>
        </>
    )
}

export default SubmitImageButton
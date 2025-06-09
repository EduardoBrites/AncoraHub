function FieldOfText({ type, text }) {
  return (
    <>
      <input type={type} className="inputText fontStyle" placeholder={text}/>
    </>
  );
}

export default FieldOfText
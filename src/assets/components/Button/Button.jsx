import { useNavigate } from 'react-router-dom'

function Button({ src, text }) {
  const navigate = useNavigate()

  function navigateButton() {
    navigate(`/${src}`)
  }

  return (
    <button className="defaultButton fontStyle" onClick={navigateButton}>
      {text}
    </button>
  )
}

export default Button

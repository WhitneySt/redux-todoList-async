import PropTypes from 'prop-types'

const Error = ({message=""}) => {
  return (
      <div>Error: { message}</div>
  )
}

Error.propTypes = {
    message: PropTypes.string
}

export default Error
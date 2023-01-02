import PropTypes from 'prop-types';
import { Triangle } from 'react-loader-spinner';



export const Loader = ({visible}) => {
    return (
        <>
        <Triangle
  height="80"
  width="80"
  color="red"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass='override'
  visible={visible}
/>

        </>
    )
}

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
}
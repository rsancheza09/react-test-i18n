import React from 'react';
import PropTypes from 'prop-types';
import { MoonLoader } from 'react-spinners';

const Loading = (props) => (
  <div className="loading">
    <MoonLoader
      className="loading-spinner"
      sizeUnit="px"
      size={ 20 }
      color={ '#00524C' }
      loading={ !props.isLoading ? true : false }
    />
  </div>
);

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loading;

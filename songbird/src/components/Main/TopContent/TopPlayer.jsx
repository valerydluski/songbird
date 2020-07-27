import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import TopPlayerStyled from './Styled/TopPlayerStyled';

const TopPlayer = ({ audioSrc }) => {
  return (
    <TopPlayerStyled>
      <AudioPlayer autoPlay src={audioSrc} />
    </TopPlayerStyled>
  );
};

TopPlayer.propTypes = {
  audioSrc: PropTypes.string,
};

TopPlayer.defaultProps = {
  audioSrc: '******',
};

export default TopPlayer;

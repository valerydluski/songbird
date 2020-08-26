import React from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import TopPlayerStyled from './Styled/TopPlayerStyled';

const TopPlayer = ({ audioSrc }) => {
  return (
    <TopPlayerStyled>
      <ReactAudioPlayer src={audioSrc} controls />
    </TopPlayerStyled>
  );
};

TopPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
};

export default TopPlayer;

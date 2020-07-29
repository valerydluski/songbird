import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import TopPlayerStyled from './Styled/TopPlayerStyled';

const TopPlayer = ({ audioSrc }) => {
  return (
    <TopPlayerStyled>
      <AudioPlayer
        src={audioSrc}
        autoPlay={false}
        showJumpControls={false}
        showLoopControl={false}
        style={{ backgroundColor: '#6550de' }}
      />
    </TopPlayerStyled>
  );
};

TopPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
};

export default TopPlayer;

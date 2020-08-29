import React, { useContext, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import TopPlayerStyled from './Styled/TopPlayerStyled';
import { ContextApp } from '../../../store/reducer';

const TopPlayer = ({ audioSrc }) => {
  const { state, dispatch } = useContext(ContextApp);

  const Player = createRef();

  const pausePlayer = () => {
    if (state.isPauseBottom) {
      Player.current.audio.current.pause();
      dispatch({
        type: 'isPauseBottom',
        payload: {
          isPauseBottom: false,
        },
      });
    }
  };

  useEffect(() => {
    pausePlayer();
  }, [pausePlayer]);

  return (
    <TopPlayerStyled>
      <AudioPlayer
        ref={Player}
        src={audioSrc}
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
        style={{ backgroundColor: 'rgba(101, 80, 222, 0.7)' }}
        onPlay={() => {
          dispatch({
            type: 'isPause',
            payload: {
              isPause: true,
            },
          });
        }}
      />
    </TopPlayerStyled>
  );
};

TopPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
};

export default TopPlayer;

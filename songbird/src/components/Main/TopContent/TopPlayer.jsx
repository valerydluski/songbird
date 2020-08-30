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
    if (state.isPause) {
      Player.current.audio.current.pause();
      dispatch({
        type: 'isPause',
        payload: {
          isPause: false,
        },
      });
    }
  };

  useEffect(() => {
    pausePlayer();
  }, [pausePlayer]);

  const myPlayer = (
    <AudioPlayer
      ref={Player}
      src={audioSrc}
      showJumpControls={false}
      autoPlayAfterSrcChange={false}
      style={{ backgroundColor: 'rgba(101, 80, 222, 0.7)' }}
      onPlay={() => {
        dispatch({
          type: 'isPauseBottom',
          payload: {
            isPauseBottom: true,
          },
        });
      }}
    />
  );
  return <TopPlayerStyled>{myPlayer}</TopPlayerStyled>;
};

TopPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
};

export default TopPlayer;

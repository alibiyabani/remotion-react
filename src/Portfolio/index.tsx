import { AbsoluteFill, Audio, Series } from 'remotion';

import SceneStart from './Scene/SceneStart';
import SceneOne from './Scene/SceneOne';
import SceneTwo from './Scene/SceneTwo';
import SceneThree from './Scene/SceneThree';
import SceneEnding from './Scene/SceneEnding';

import './Portfolio.css';
import music from "../input_data/music/music.mp3";

let config = require('../input_data/config/config.json');

const Portfolio: React.FC = () => {

  return (
    <AbsoluteFill className='app__portfolio-main'>
      <Series>
        <Series.Sequence durationInFrames={25 * 3}>
          <SceneStart appConfig={config} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={25 * 3}>
          <SceneOne appConfig={config} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={25 * 3}>
          <SceneTwo appConfig={config} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={25 * 3}>
          <SceneThree appConfig={config} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={25 * 8}>
          <SceneEnding appConfig={config} />
        </Series.Sequence>
      </Series>
      <Audio src={music} startFrom={20} endAt={25 * 20} />
    </AbsoluteFill>
  )
}

export default Portfolio
import { interpolate, useCurrentFrame, useVideoConfig, Video, spring } from 'remotion';


import video from "../../input_data/footage/3.mp4";


interface IProps { appConfig: any }

const SceneThree = (props: IProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textOpacity = (offset: number) => interpolate(frame - offset, [0, 25], [0, 1])
  const textMovment = (offset: number) => spring({ frame: frame - offset, fps, from: 0, to: 1 })


  return (
    <div className='app__object-wrapper'>
      <div className='app__child-wrapper' style={{ zIndex: 2, fontFamily: `${props.appConfig.app['font-family']}` }}>
        <div
          style={{
            fontSize: `${props.appConfig.app['font-size-small']}`,
            color: `${props.appConfig.app['font-color']}`,
            position: 'absolute',
            top: 800,
            left: 100
          }}>
          {props.appConfig.app['scene-three-text'].split(' ').map((w: string, i: number) => (
            <div
              className='app__scene-title'
              style={{
                opacity: textOpacity(i),
                display: 'inline-block',
                marginLeft: 40,
                transform: `scale(${textMovment(i)})`
              }}>{w}
            </div>
          ))}
        </div>
      </div>
      <div className='app__child-wrapper'>
        <Video src={video} playbackRate={1} volume={0} />
      </div>
    </div>
  )
}

export default SceneThree
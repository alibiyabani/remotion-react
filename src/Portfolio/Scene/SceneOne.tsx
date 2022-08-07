import { interpolate, useCurrentFrame, useVideoConfig, Video, spring, Img } from 'remotion';

import video from "../../input_data/footage/1.mp4";
import image1 from "../../input_data/image/image1.png";
import image2 from "../../input_data/image/image2.png";


interface IProps {
  appConfig: any
}

const SceneOne = (props: IProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textOpacity = (offset: number) => interpolate(frame - offset, [0, 25], [0, 1])
  const textMovment = (offset: number) => spring({ frame: frame - offset, fps, from: 200, to: 0 })

  const logoOpacity = interpolate(frame, [0, 25], [0, 1])
  const logoMovment = spring({ frame: frame, fps, from: -200, to: 0 })

  return (
    <div className='app__object-wrapper app_scene-one-wrapper'>
      <div className='app__child-wrapper ' style={{ zIndex: 2, fontFamily: `${props.appConfig.app['font-family']}` }}>
        <div
          style={{
            fontSize: `${props.appConfig.app['font-size-small']}`,
            color: `${props.appConfig.app['font-color']}`,
            position: 'absolute',
            top: 550,
            left: 200
          }}>
          {props.appConfig.app['scene-one-text'].split(' ').map((w: string, i: number) => (
            <div
              key={i}
              className='app__scene-title'
              style={{
                opacity: textOpacity(i),
                transform: `translateY(${textMovment(i)}px)`,
                display: 'inline-block',
                marginLeft: 30
              }}>{w}
            </div>
          ))}
        </div>
      </div>
      <div className='app__backgroubd-mask-1' style={{
        borderTop: `10px solid ${props.appConfig.app['primary-color']}`,
        backgroundColor: `${props.appConfig.app['mask-background-color']}`,
      }}>
      </div>
      <div className='logo-wrapper' style={{
        opacity: logoOpacity,
        transform: `translateX(${logoMovment}px)`
      }}>
        <Img src={image1} />
        <Img src={image2} />
      </div>
      <div className='app__child-wrapper'>
        <Video src={video} playbackRate={1} volume={0} />
      </div>
    </div>
  )
}

export default SceneOne
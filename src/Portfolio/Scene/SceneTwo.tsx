import { interpolate, useCurrentFrame, useVideoConfig, Video, spring, Img } from 'remotion';


import video from "../../input_data/footage/2.mp4";
import image3 from "../../input_data/image/image3.png";
import image4 from "../../input_data/image/image4.png";

interface IProps {
  appConfig: any
}

const SceneTwo = (props: IProps) => {

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textOpacity = (offset: number) => interpolate(frame - offset, [0, 25], [0, 1])
  const textMovment = (offset: number) => spring({ frame: frame - offset, fps, from: -200, to: 0 })

  const logoOpacity = interpolate(frame, [0, 25], [0, 1])
  const logoMovment = spring({ frame: frame, fps, from: -200, to: 0 })

  return (
    <div className='app__object-wrapper app_scene-two-wrapper'>
      <div className='app__child-wrapper' style={{ zIndex: 2, fontFamily: `${props.appConfig.app['font-family']}` }}>
        <div
          style={{
            fontSize: `${props.appConfig.app['font-size-small']}`,
            color: `${props.appConfig.app['font-color']}`,
            position: 'absolute',
            top: 780,
            left: 550
          }}>
          {props.appConfig.app['scene-two-text'].split(' ').map((w: string, i: number) => (
            <div
              key={i}
              className='app__scene-title'
              style={{
                opacity: textOpacity(i),
                transform: `translateY(${textMovment(i)}px)`,
                display: 'inline-block',
                marginLeft: 60
              }}>{w}
            </div>
          ))}
        </div>
      </div>
      <div className='app__backgroubd-mask-2' style={{
        borderTop: `10px solid ${props.appConfig.app['primary-color']}`,
        backgroundColor: `${props.appConfig.app['mask-background-color']}`
      }}>
      </div>
      <div className='logo-wrapper' style={{
        opacity: logoOpacity,
        transform: `translateX(${logoMovment}px)`
      }}>

        <Img src={image3} />

        <Img src={image4} />
      </div>
      <div className='app__child-wrapper'>
        <Video src={video} playbackRate={1} volume={0} />
      </div>
    </div>
  )
}

export default SceneTwo
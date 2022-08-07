import { interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';


interface IProps { appConfig: any }

const SceneStart = (props: IProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textOpacity = interpolate(frame, [0, 25], [0, 1])
  const textMovment = spring({ frame, fps, from: 200, to: 0 })

  return (
    <div className='app_scene-start-wrapper'>
      <span style={{
        fontFamily: `${props.appConfig.app['font-family']}`,
        color: props.appConfig.app['primary-color'],
        opacity: textOpacity,
        transform: `translateY(${textMovment}px)`
      }}>
        {props.appConfig.app['scene-start-text']}
      </span>
    </div>
  )
}

export default SceneStart
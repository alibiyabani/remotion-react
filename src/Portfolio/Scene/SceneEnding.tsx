import { interpolate, useCurrentFrame, useVideoConfig, spring, Img } from 'remotion';

import logo from "../../input_data/logo/logo.png";

interface IProps { appConfig: any }

const SceneEnding = (props: IProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();


  const objectOpacity = interpolate(frame, [0, 25], [0, 1])
  const logoScale = spring({ frame: frame, fps, from: 0, to: 1 })

  const companyDetailsMovement = spring({ frame, fps, from: 250, to: 0 })

  return (
    <div className='app_scene-ending-wrapper'>
      <div style={{
        position: 'absolute',
        top: 40,
        paddingLeft: 30,
        opacity: objectOpacity,
        transform: `scale(${logoScale})`
      }}>
        <Img src={logo} />
      </div>
      <span style={{ fontSize: 40, fontFamily: `${props.appConfig.app['font-family']}`, marginTop: '100px', color: props.appConfig.app['primary-color'], opacity: objectOpacity, }}>
        {props.appConfig.app['company-title']}
      </span>
      <span style={{ fontSize: 35, fontFamily: `${props.appConfig.app['font-family']}`, margin: '1rem 0', color: props.appConfig.app['primary-color'], opacity: objectOpacity, }}>
        {props.appConfig.app['scene-ending-text']}
      </span>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        fontSize: 45,
        gap: 30,
        marginTop: 100,
        opacity: objectOpacity,
        transform: `translateY(${companyDetailsMovement}px)`,

      }}>
        <span style={{ fontWeight: 'bold', fontFamily: `${props.appConfig.app['font-family']}`, color: props.appConfig.app['primary-color'] }}>
          {props.appConfig.app['company-website']}
        </span>
        <span style={{ fontWeight: 'bold', fontFamily: `${props.appConfig.app['font-family']}`, color: props.appConfig.app['primary-color'] }}>
          |
        </span>
        <span style={{ fontWeight: 'bold', fontFamily: `${props.appConfig.app['font-family']}`, color: props.appConfig.app['primary-color'] }}>
          {props.appConfig.app['company-contact-number']}
        </span>
      </div>

    </div>
  )
}

export default SceneEnding
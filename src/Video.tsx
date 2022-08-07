import { Composition } from 'remotion';
import Portfolio from './Portfolio';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Portfolio"
				component={Portfolio}
				durationInFrames={25 * 19}
				fps={25}
				width={1920}
				height={1080}
			/>
		</>
	);
};

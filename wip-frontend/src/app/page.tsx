import CustomPlayer from "@/components/CustomPlayer";
import { Suspense } from "react";

// https://www.npmjs.com/package/react-player
const Loader = () => <div>Loading player...</div>;
export default function Home() {
	return (
		<div className="">
			<Suspense fallback={<Loader />}>
				<CustomPlayer url="/testTrack.mp3" />
			</Suspense>
		</div>
	);
}

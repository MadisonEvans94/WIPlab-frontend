import PlayerContainer from "../components/PlayerContainer";

import React from "react";
import { Suspense } from "react";

const Loader = () => <div>Loading player...</div>;
export default function Home() {
	const playerData = [
		{ id: 1, url: "/testTrack.mp3" /* ...other props... */ },
		{ id: 2, url: "/testTrack.mp3" /* ...other props... */ },
		// Add more player data objects as needed
	];
	return (
		<div className="px-20">
			<Suspense fallback={<Loader />}>
				<PlayerContainer playerData={playerData} />
			</Suspense>
		</div>
	);
}

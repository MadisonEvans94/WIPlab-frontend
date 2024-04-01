import PlayerContainer from "@/components/PlayerContainer";
import React from "react";
import { Suspense } from "react";
import tracks from "../../testData/tracks.json";
import { Input } from "@/components/util/input";
const Loader = () => <div>Loading player...</div>;
export default function Feed() {
	return (
		<>
			<Input className="border" />
			<div className="px-20">
				<Suspense fallback={<Loader />}>
					<PlayerContainer tracks={tracks} />
				</Suspense>
			</div>
		</>
	);
}

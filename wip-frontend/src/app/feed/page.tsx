import PlayerContainer from "@/components/PlayerContainer";
import React from "react";
import { Suspense } from "react";
import tracks from "../../testData/tracks.json";
import SearchBar from "@/components/SearchBar";

const Loader = () => <div>Loading player...</div>;
export default function Feed() {
	return (
		<>
			<SearchBar />
			<div className="px-20">
				<Suspense fallback={<Loader />}>
					<PlayerContainer tracks={tracks} />
				</Suspense>
			</div>
		</>
	);
}

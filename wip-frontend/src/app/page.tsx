import PlayerContainer from "../components/PlayerContainer";
import React from "react";
import { Suspense } from "react";

const Loader = () => <div>Loading player...</div>;
export default function Home() {
	const playerData = [
		{
			id: 1,
			url: "/testTrack.mp3",
			imgUrl: "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?q=80&w=3627&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			comments: [{ id: 188, time: 29, imageSrc: "", content: "dope" }],
			trackMetaData: {
				trackTitle: "Demo Track",
				artistName: "Madison Evans",
				date: "3-27-2024",
				genres: ["bounce", "house"],
			},
			isPlaying: false,
		},
		{
			id: 2,
			url: "/oldsouls.mp3",
			imgUrl: "https://images.unsplash.com/photo-1601436155198-2ebfea8117b0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			comments: [{ id: 18, time: 9, imageSrc: "", content: "wow" }],
			trackMetaData: {
				trackTitle: "Old Souls",
				artistName: "Blue Cloud",
				date: "2-1-2024",
				genres: ["bounce", "house"],
			},
			isPlaying: false,
		},
	];
	return (
		<div className="px-20">
			<Suspense fallback={<Loader />}>
				<PlayerContainer playerData={playerData} />
			</Suspense>
		</div>
	);
}

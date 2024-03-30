"use client";
import React, { useState } from "react";
import Player from "./Player";
import { PlayerContainerProps } from "@/definitions";

const PlayerContainer: React.FC<PlayerContainerProps> = ({ playerData }) => {
	const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
	const handlePlay = (playerId: any) => {
		// If the same player is clicked again, it will toggle off (stop playing)
		if (currentlyPlaying === playerId) {
			setCurrentlyPlaying(null);
		} else {
			setCurrentlyPlaying(playerId);
		}
	};

	return (
		<div className="flex flex-col gap-2">
			{playerData.map((data) => (
				<Player
					id={data.id}
					key={data.id}
					url={data.url}
					isPlaying={currentlyPlaying === data.id}
					onPlay={() => handlePlay(data.id)}
					trackMetaData={{
						trackTitle: "Old Souls",
						artistName: "Blue Cloud",
						date: "3-27-2024",
						genres: ["bounce", "house"],
					}}
					comments={[
						{
							id: "comment1",
							time: 10,
							imageSrc: "/testImage.png",
						},
						{
							id: "comment2",
							time: 30,
							imageSrc: "/testImage.png",
						},
					]}
				/>
			))}
		</div>
	);
};

export default PlayerContainer;

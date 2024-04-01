"use client";
import React, { useState } from "react";
import Player from "./Player";
import { PlayerContainerProps } from "@/definitions";

const PlayerContainer: React.FC<PlayerContainerProps> = ({ tracks }) => {
	const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
	const handlePlay = (playerId: any) => {
		if (currentlyPlaying === playerId) {
			setCurrentlyPlaying(null);
		} else {
			setCurrentlyPlaying(playerId);
		}
	};

	return (
		<div className="flex flex-col gap-2 bg-blue-400">
			{tracks.map((data) => (
				<Player
					id={data.id}
					imgUrl={data.imgUrl}
					// {data.imgUrl}
					key={data.id}
					url={data.url}
					isPlaying={currentlyPlaying === data.id}
					onPlay={() => handlePlay(data.id)}
					trackMetaData={data.trackMetaData}
					comments={data.comments}
				/>
			))}
		</div>
	);
};

export default PlayerContainer;

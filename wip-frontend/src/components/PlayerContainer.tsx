"use client";
import React, { useState } from "react";
import Player from "./Player";
import { TrackMetaData } from "@/definitions";

export interface PlayerContainerProps {
	playerData: {
		id: number;
		url: string;
		imgUrl: string;
		comments: {
			id: number;
			time: number;
			imageSrc: string;
			content: string;
		}[];
		trackMetaData: TrackMetaData;
		isPlaying: boolean;
	}[];
}
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

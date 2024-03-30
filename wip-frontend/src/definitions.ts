export interface Comment {
	id: string;
	time: number; // Timestamp of the comment in seconds
	imageSrc: string; // URL of the comment image
}

export interface PlayerProps {
	id: number;
	url: string;
	comments: Comment[];
	trackMetaData: TrackMetaData;
	isPlaying: boolean;
	onPlay: (playerId: number) => void; // Pass the player ID to the onPlay function
}

type TrackMetaData = {
	trackTitle: string;
	artistName: string;
	date: string;
	genres: string[];
};

export interface PlayerContainerProps {
	playerData: { id: number; url: string }[];
}

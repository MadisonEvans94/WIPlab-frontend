export interface Comment {
	id: number;
	time: number; // Timestamp of the comment in seconds
	imageSrc: string; // URL of the comment image
	content: string;
}

export interface PlayerProps {
	id: number;
	url: string;
	imgUrl: string;
	comments: Comment[];
	trackMetaData: TrackMetaData;
	isPlaying: boolean;
	onPlay: (playerId: number) => void; // Pass the player ID to the onPlay function
}

export interface PlayerContainerProps {
	tracks: {
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

export type TrackMetaData = {
	trackTitle: string;
	artistName: string;
	date: string;
	genres: string[];
};

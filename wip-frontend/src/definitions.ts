export interface Comment {
	id: string;
	time: number; // Timestamp of the comment in seconds
	imageSrc: string; // URL of the comment image
}

export interface PlayerProps {
	url: string;
	comments: Comment[];
	trackMetaData: trackMetaData; // Track
}

type trackMetaData = {
	trackTitle: string;
	artistName: string;
	date: string;
	genres: string[];
};

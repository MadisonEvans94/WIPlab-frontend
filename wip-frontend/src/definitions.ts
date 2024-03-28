export interface Comment {
	id: string;
	time: number; // Timestamp of the comment in seconds
	imageSrc: string; // URL of the comment image
}

export interface PlayerProps {
	url: string; // URL of the audio file
	comments: Comment[]; // Array of comments
}

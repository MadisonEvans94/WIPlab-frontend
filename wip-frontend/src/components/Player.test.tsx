// Player.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomComponent from "./RandomComponent";
import Player from "./Player";

// const mockProps = {
// 	id: 1,
// 	url: "/testTrack.mp3",
// 	comments: [
// 		{ id: 346, time: 100, imageSrc: "path-to-image1.png", content: "dope" },
// 		{
// 			id: 2734,
// 			time: 200,
// 			imageSrc: "path-to-image2.png",
// 			content: "cool",
// 		},
// 	],
// 	imgUrl: "https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// 	trackMetaData: {
// 		trackTitle: "Test Track",
// 		artistName: "Test Artist",
// 		date: "2024-03-31",
// 		genres: ["Genre1", "Genre2"],
// 	},
// 	isPlaying: false,
// 	onPlay: jest.fn(),
// };

describe("Player Component", () => {
	it("renders component to the DOM", () => {});

	// it("displays the correct track metadata", () => {
	// 	// This test will check if the track title, artist name, and date are correctly displayed from the trackMetaData prop.
	// });

	// it("renders the waveform container", () => {
	// 	// This test will check if the waveform container is present in the DOM.
	// });

	// it("loads the audio URL into WaveSurfer when component mounts", () => {
	// 	// This test will mock WaveSurfer and verify if it's called with the correct URL when the component mounts.
	// });

	// it("cleans up WaveSurfer instance on component unmount", () => {
	// 	// This test will mock WaveSurfer to ensure it's destroyed when the component unmounts.
	// });

	// it("plays the audio when play button is clicked", () => {
	// 	// This test will simulate a click on the play button and verify if the audio starts playing.
	// });

	// it("pauses the audio when pause button is clicked", () => {
	// 	// This test will simulate a click on the pause button and verify if the audio is paused.
	// });

	// it("renders comment markers at correct positions on the waveform", () => {
	// 	// This test will verify that comments are rendered as images at the correct positions on the waveform.
	// });

	// it("renders the correct number of genres as tags", () => {
	// 	// This test will check if the correct number of genre tags are rendered based on the genres prop.
	// });

	// it("triggers the correct action when like button is clicked", () => {
	// 	// This test will simulate a click on the like button and verify if the correct action is triggered.
	// });

	// it("triggers the correct action when share button is clicked", () => {
	// 	// This test will simulate a click on the share button and verify if the correct action is triggered.
	// });

	// it("triggers the correct action when bid button is clicked", () => {
	// 	// This test will simulate a click on the bid button and verify if the correct action is triggered.
	// });

	// it("triggers the correct action when copy link button is clicked", () => {
	// 	// This test will simulate a click on the copy link button and verify if the correct action is triggered.
	// });

	// it("triggers the filter action when a genre tag is clicked", () => {
	// 	// This test will simulate a click on a genre tag and verify if the filter action is triggered.
	// });

	// it("shows the correct number of comments", () => {
	// 	// This test will check if the component displays the correct number of comments passed in the comments prop.
	// });

	// it("handles WaveSurfer errors gracefully", () => {
	// 	// This test will mock an error in WaveSurfer and verify if the component handles it gracefully.
	// });

	// Add any additional tests for other interactions or side effects that your component may have.
});

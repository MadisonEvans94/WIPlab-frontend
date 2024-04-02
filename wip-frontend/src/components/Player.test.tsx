// Player.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomComponent from "./RandomComponent";
const mockProps = {
	id: 1,
	url: "/testTrack.mp3",
	comments: [
		{
			id: 346,
			time: 100,
			imageSrc:
				"https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			content: "dope",
		},
		{
			id: 2734,
			time: 200,
			imageSrc:
				"https://images.unsplash.com/photo-1709577938593-1fc3991d3c93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
			content: "cool",
		},
	],
	imgUrl: "https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	trackMetaData: {
		trackTitle: "Test Track",
		artistName: "Test Artist",
		date: "2024-03-31",
		genres: ["Genre1", "Genre2"],
	},
	isPlaying: false,
	onPlay: jest.fn(),
};
describe("Player Component", () => {
	// it("renders component to the DOM", async () => {
	// 	// Mark the function as async
	// 	render(<RandomComponent title="Random Title" />);
	// 	expect(await screen.findByText("Random Title")).toBeInTheDocument(); // Await the findByText method
	// });
	// it("renders the image with correct alt attributes", () => {
	// 	render(<RandomComponent title="Random Title" />);
	// 	const imageElement = screen.getByRole("img");
	// 	expect(imageElement).toHaveAttribute("alt", "dummy");
	// });
	// it("renders different titles based on props", () => {
	// 	const { rerender } = render(<RandomComponent title="First Title" />);
	// 	expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
	// 		"First Title"
	// 	);

	// 	rerender(<RandomComponent title="Second Title" />);
	// 	expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
	// 		"Second Title"
	// 	);
	// });
	it("renders different titles based on props", () => {});
});

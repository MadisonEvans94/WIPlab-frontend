// Player.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomComponent from "./RandomComponent";

describe("Player Component", () => {
	it("renders component to the DOM", async () => {
		// Mark the function as async
		render(<RandomComponent />);
		expect(await screen.findByText("Random")).toBeInTheDocument(); // Await the findByText method
	});
});

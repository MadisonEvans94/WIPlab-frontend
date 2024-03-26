"use client";
// "use client" is not required in this context, as Next.js automatically determines server vs client rendering
import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import Image from "next/image";

// Import icons from 'react-icons'
import { BsFillStopFill, BsFillPlayFill } from "react-icons/bs";

interface PlayerProps {
	url: string; // URL of the audio file
}

const Player: React.FC<PlayerProps> = ({ url }) => {
	const waveformRef = useRef<HTMLDivElement | null>(null);
	const wavesurferRef = useRef<WaveSurfer | null>(null);

	useEffect(() => {
		// Create WaveSurfer instance
		if (waveformRef.current) {
			const wavesurferInstance = WaveSurfer.create({
				container: waveformRef.current,
				waveColor: "#F00",
				progressColor: "#555", // Choose a progress color that stands out
				cursorColor: "transparent", // Making the cursor transparent
				barWidth: 2, // Set the desired barWidth for the bars in the waveform
				barHeight: 1, // The height of the waveform bars. You may have to adjust this depending on your preference
				barGap: 1, // The optional spacing between bars of the wave, if not set, the value is calculated in conjunction with barWidth and the canvas width
				height: 128, // Height of the waveform
			});

			// Store the instance in the ref
			wavesurferRef.current = wavesurferInstance;

			// Load the audio file
			wavesurferInstance.load(url);

			// Add event listener for when WaveSurfer is ready
			wavesurferInstance.on("ready", () => {
				console.log("WaveSurfer is ready");
				// If you want to play the audio as soon as it is ready, uncomment the line below
				// wavesurferInstance.play();
			});

			// Add event listener for errors
			wavesurferInstance.on("error", (error) => {
				console.error("WaveSurfer error:", error);
			});

			// Clean up on component unmount
			return () => wavesurferInstance.destroy();
		}
	}, [url]); // Run the effect when the URL changes

	const handleStop = () => {
		if (wavesurferRef.current) {
			wavesurferRef.current.stop();
		}
	};
	const handlePlayPause = () => {
		if (wavesurferRef.current) {
			console.log("play");
			wavesurferRef.current.playPause();
		}
	};

	return (
		<>
			<div className="flex justify-center items-center pt-16">
				<div className="w-1/5 flex flex-col items-center rounded-xl bg-gray-800 shadow-2xl">
					<Image
						src="/oceans.jpg"
						width={1000}
						height={1000}
						className="rounded-t-lg object-cover h-48 w-full"
						alt="placeholder"
					/>
					<p className="text-white my-2">Oceans</p>
					<div
						ref={waveformRef}
						className="w-full px-4 py-2 bg-gray-700 rounded-b-lg"
					/>
					<div className="flex justify-around w-full px-4 py-4">
						<button
							onClick={handlePlayPause}
							className="text-blue-400 hover:text-blue-500 focus:outline-none"
						>
							<BsFillPlayFill size={24} />
						</button>
						<button
							onClick={handleStop}
							className="text-red-400 hover:text-red-500 focus:outline-none"
						>
							<BsFillStopFill size={24} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Player;

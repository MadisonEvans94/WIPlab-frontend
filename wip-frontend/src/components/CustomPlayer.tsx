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
				waveColor: "violet", // Use a color that matches the gradient's light end.
				progressColor: "purple", // Use a color that matches the gradient's dark end.
				cursorColor: "transparent",
				barWidth: 2,
				barGap: 1, // The space between bars.
				height: 80, // Adjust to match the height in the SoundCloud player.
				normalize: true, // This ensures the waveform fits well in the container.
				backend: "MediaElement", // Use the MediaElement backend.
			});

			// Store the instance in the ref
			wavesurferRef.current = wavesurferInstance;

			// Load the audio file
			wavesurferInstance.load(url);

			// Add event listener for errors
			wavesurferInstance.on("error", (error) => {
				console.error("WaveSurfer error:", error);
			});

			// Clean up on component unmount
			return () => wavesurferInstance.destroy();
		}
	}, [url]); // Run the effect when the URL changes

	const handlePlayPause = () => {
		if (wavesurferRef.current) {
			console.log("play");
			wavesurferRef.current.playPause();
		}
	};

	return (
		<>
			<div className="flex justify-center items-center pt-16">
				<p className="text-white my-2">Track Title</p>
				<div className="waveform-container">
					<BsFillPlayFill
						onClick={handlePlayPause}
						className="text-blue-400 cursor-pointer hover:text-blue-500 focus:outline-none"
						size={40}
					/>
					<div ref={waveformRef} className="waveform-ref-style" />
				</div>
			</div>
		</>
	);
};

export default Player;

"use client";

import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Image from "next/image";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { PlayerProps } from "@/definitions";

const Player: React.FC<PlayerProps> = ({ url, comments }) => {
	const waveformRef = useRef<HTMLDivElement | null>(null);
	const wavesurferRef = useRef<WaveSurfer | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0); // State to store the duration of the track

	useEffect(() => {
		if (waveformRef.current) {
			const wavesurferInstance = WaveSurfer.create({
				container: waveformRef.current,
				waveColor: "violet",
				progressColor: "purple",
				cursorColor: "transparent",
				barWidth: 2,
				barGap: 1,
				height: 80,
				normalize: true,
				backend: "MediaElement",
			});

			wavesurferRef.current = wavesurferInstance;

			wavesurferInstance.load(url);

			wavesurferInstance.on("ready", () => {
				setDuration(wavesurferInstance.getDuration());
			});

			wavesurferInstance.on("error", (error) => {
				console.error("WaveSurfer error:", error);
			});

			wavesurferInstance.on("play", () => {
				setIsPlaying(true);
			});

			wavesurferInstance.on("pause", () => {
				setIsPlaying(false);
			});

			return () => wavesurferInstance.destroy();
		}
	}, [url]);

	const handlePlayPause = () => {
		if (wavesurferRef.current) {
			wavesurferRef.current.playPause();
			setIsPlaying(!isPlaying);
		}
	};

	const commentElements = comments.map((comment) => {
		const commentPosition = (comment.time / duration) * 100;
		return (
			<img
				key={comment.id}
				src={comment.imageSrc}
				alt="Comment"
				className="cursor-pointer absolute z-[1000] w-[30px] bottom-0 -translate-x-1/2"
				style={{
					left: `${commentPosition}%`,
				}}
			/>
		);
	});

	return (
		<div className="flex h-fit items-center m-2 border rounded">
			<Image
				className="rounded flex-grow p-2"
				src="/testImage.png"
				alt="cover"
				width={200}
				height={200}
			/>
			<div className="w-full h-fit flex flex-col justify-between">
				<div className="w-full flex justify-between items-end p-2">
					<div>
						<p className="font-bold text-2xl">Track Title</p>
						<p className="text-lg">Artist Name</p>
						<p className="italic">Date</p>
					</div>
					<div className="flex gap-2 h-full">
						<button className="border p-2 h-fit w-16 rounded">
							Like
						</button>
						<button className="border p-2 h-fit w-16 rounded">
							Bid
						</button>
					</div>
				</div>
				<div className="flex justify-center items-end p-2">
					<button onClick={handlePlayPause} className="mr-2 my-auto">
						{isPlaying ? (
							<BsFillPauseFill size={80} />
						) : (
							<BsFillPlayFill size={80} />
						)}
					</button>
					<div className="relative w-full" ref={waveformRef}>
						{duration > 0 && commentElements}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;

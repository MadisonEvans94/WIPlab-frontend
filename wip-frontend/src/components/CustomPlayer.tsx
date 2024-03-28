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
				style={{
					position: "absolute",
					zIndex: 1000,
					left: `${commentPosition}%`,
					bottom: "0",
					width: "30px",
					transform: "translateX(-50%)",
				}}
			/>
		);
	});

	return (
		<>
			<div className="flex justify-center items-center pt-16">
				<div className="relative" ref={waveformRef}>
					{/* Overlay for comments */}
					{duration > 0 && commentElements}
					{/* The rest of your content */}
					<Image
						className="rounded"
						src="/testImage.png"
						alt="cover"
						width={200}
						height={200}
					/>
					<div className="px-4 gap-4 flex h-[200px] flex-col w-full justify-center">
						<div className="flex justify-between">
							<div className="flex flex-col">
								<p className="font-bold text-2xl">
									Track Title
								</p>
								<p className="text-lg">Artist Name</p>
								<p className="italic">Date</p>
							</div>
							<div className="flex gap-2">
								<button className="border p-2 h-fit w-16 rounded">
									Like
								</button>
								<button className="border p-2 h-fit w-16 rounded">
									Bid
								</button>
							</div>
						</div>
						<div className="flex items-center w-full">
							<button onClick={handlePlayPause} className="">
								{isPlaying ? (
									<BsFillPauseFill size={60} />
								) : (
									<BsFillPlayFill size={60} />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Player;

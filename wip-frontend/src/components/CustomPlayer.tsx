"use client";

import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Image from "next/image";
import {
	BsFillPauseFill as Pause,
	BsFillPlayFill as Play,
} from "react-icons/bs";
import { PlayerProps } from "@/definitions";
import { BiLike as LikeIcon } from "react-icons/bi";
import { BiSolidLike as LikeSolidIcon } from "react-icons/bi";
import { RiShareForward2Fill as ShareIcon } from "react-icons/ri";
import { MdOutlineLink as LinkIcon } from "react-icons/md";
import { FaCommentAlt as CommentIcon } from "react-icons/fa";
import { LuHeartHandshake as BidIcon } from "react-icons/lu";

// [ ] some indication of what the poster is looking for
// [ ] Days til removal
// [ ] Add a genre tag
// [ ] add a comment count indicator
// [ ] place holder handler functions

const Player: React.FC<PlayerProps> = ({ url, comments, trackMetaData }) => {
	const waveformRef = useRef<HTMLDivElement | null>(null);
	const wavesurferRef = useRef<WaveSurfer | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const { trackTitle, artistName, date } = trackMetaData;

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
	const handleLike = () => {
		console.log("Liked");
	};
	const handleShare = () => {
		console.log("shared");
	};
	const handleBid = () => {
		console.log("bid");
	};
	const handleCopy = () => {
		console.log("copied");
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
		<div className="flex h-fit items-center m-2 rounded">
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
						<p className="font-bold text-3xl">{trackTitle}</p>
						<p className="text-lg">{artistName}</p>
						<p className="italic">{date}</p>
					</div>
					<div className="flex gap-2 h-full">
						<button
							onClick={handleLike}
							className="border p-2 h-fit hover:bg-white hover:text-black transition flex w-fit rounded items-center gap-2 justify-center"
						>
							<LikeIcon size="1.2em" />
							Like
						</button>
						<button
							onClick={handleBid}
							className="border p-2 h-fit hover:bg-white hover:text-black transition flex w-fit rounded items-center gap-2 justify-center"
						>
							<BidIcon size="1.2em" />
							Bid
						</button>
						<button
							onClick={handleCopy}
							className="border p-2 h-fit hover:bg-white hover:text-black transition flex w-fit rounded items-center gap-2 justify-center"
						>
							<LinkIcon size="1.2em" />
							Copy Link
						</button>
						<button
							onClick={handleShare}
							className="border p-2 h-fit flex w-fit hover:bg-white hover:text-black transition rounded items-center gap-2 justify-center"
						>
							<ShareIcon size="1.2em" />
							Share
						</button>
					</div>
				</div>
				<div className="flex justify-center items-end p-2">
					<button onClick={handlePlayPause} className="mr-2 my-auto">
						{isPlaying ? <Pause size={80} /> : <Play size={80} />}
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

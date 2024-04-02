"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import WaveSurfer from "wavesurfer.js";
import Image from "next/image";
import {
	BsFillPauseFill as Pause,
	BsFillPlayFill as Play,
} from "react-icons/bs";
import { Comment, PlayerProps } from "@/definitions"; // Make sure this import path is correct
import { BiLike as LikeIcon } from "react-icons/bi";
import { RiShareForward2Fill as ShareIcon } from "react-icons/ri";
import { MdOutlineLink as LinkIcon } from "react-icons/md";
import { FaCommentAlt as CommentIcon } from "react-icons/fa";
import { LuHeartHandshake as BidIcon } from "react-icons/lu";

// Assuming PlayerProps is already defined with the necessary types including a unique identifier `id` and `isPlaying` boolean
const Player: React.FC<PlayerProps> = ({
	id,
	url,
	comments,
	trackMetaData,
	isPlaying,
	onPlay,
	imgUrl,
}) => {
	const [activeComment, setActiveComment] = useState<Comment | null>(null);
	const waveformRef = useRef<HTMLDivElement | null>(null);
	const wavesurferRef = useRef<WaveSurfer | null>(null);
	const [duration, setDuration] = useState(0);
	const { trackTitle, artistName, date, genres } = trackMetaData;

	// Initialize WaveSurfer
	useEffect(() => {
		if (waveformRef.current) {
			const wavesurferInstance = WaveSurfer.create({
				container: waveformRef.current,
				waveColor: "#d4f2ff",
				progressColor: "#00b3ff",
				cursorColor: "transparent",
				barWidth: 2,
				barGap: 2,
				height: 80,
				normalize: true,
				backend: "MediaElement",
			});

			wavesurferRef.current = wavesurferInstance;

			wavesurferInstance.load(url);

			wavesurferInstance.on("ready", () => {
				setDuration(wavesurferInstance.getDuration());
			});

			wavesurferInstance.on("audioprocess", () => {
				const currentTime = wavesurferInstance.getCurrentTime();
				const currentComment = comments.find((comment) => {
					return (
						currentTime >= comment.time &&
						currentTime < comment.time + 2
					); // Adjust this range as needed
				});
				if (currentComment) {
					setActiveComment(currentComment);
				} else {
					setActiveComment(null);
				}
			});

			wavesurferInstance.on("error", (error) => {
				console.error("WaveSurfer error:", error);
			});

			return () => wavesurferInstance.destroy();
		}
	}, [url, comments]); // Ensure comments is in the dependency array

	// Play or Pause the player based on `isPlaying` prop
	useEffect(() => {
		if (isPlaying) {
			wavesurferRef.current?.play();
		} else {
			wavesurferRef.current?.pause();
		}
	}, [isPlaying]);

	// Callback for when play/pause button is clicked
	const handlePlayPause = useCallback(() => {
		onPlay(id);
	}, [id, onPlay]);

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
	const handleFilterByGenre = () => {
		console.log("filterByGenre");
	};

	const commentElements = comments.map((comment) => {
		const commentPosition = (comment.time / duration) * 100;
		return (
			<>
				<Image
					className="cursor-pointer absolute z-[1000] w-[30px] h-[30px] object-cover bottom-0"
					src={comment.imageSrc}
					alt="Comment"
					key={comment.id}
					width={50}
					height={50}
					quality={20}
					style={{
						left: `${commentPosition}%`,
					}}
				/>
				{comment.id == activeComment?.id && (
					<p
						style={{ left: `${commentPosition}%` }}
						className="absolute z-[2000] bg-white text-black p-1 rounded bottom-0"
					>
						{comment.content}
					</p>
				)}
			</>
		);
	});

	// const imageLoader = ({ src, width, quality }) => {
	// 	return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
	// };

	return (
		<div className="flex h-fit items-center m-2 rounded justify-center gap-4">
			<div className="w-[250px] h-[250px] object-cover relative rounded overflow-hidden">
				<Image
					// loader={imageLoader}
					src={imgUrl}
					quality={80}
					alt="cover"
					blurDataURL="blur.jpg"
					placeholder="blur"
					fill={true}
				/>
			</div>

			<div className="w-full max-w-[1200px] h-[250px] flex flex-col justify-between items-between">
				<div className="w-full flex justify-between items-between">
					<div>
						<p className="font-bold text-3xl">{trackTitle}</p>
						<p className="text-lg">{artistName}</p>
						<p className="italic">{date}</p>
					</div>

					<div className="flex items-center gap-2 h-full">
						<div className="flex gap-2 mr-4">
							{genres.map((genre, id) => (
								<div
									key={id}
									onClick={handleFilterByGenre}
									className="cursor-pointer bg-gray-600 hover:bg-gray-400 transition text-white py-2 px-4 rounded-full"
								>
									#{genre}
								</div>
							))}
						</div>
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
						{/* <p className="absolute z-[2000] bg-white text-black p-1 rounded translate-x-1/2">
							{activeComment}
						</p> */}
					</div>
				</div>
				<div className="w-full flex gap-4 justify-end p-2">
					<div className="flex gap-2 items-center">
						<CommentIcon size="1em" className="text-white" />
						<p>{comments.length}</p>
					</div>
					<div className="flex gap-2 items-center">
						<BidIcon size="1em" className="text-white" />
						<p>5</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;

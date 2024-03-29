import CustomPlayer from "@/components/CustomPlayer";
import { Suspense } from "react";

// https://www.npmjs.com/package/react-player
// [ ]  fix so that only one song plays at a time
const Loader = () => <div>Loading player...</div>;
export default function Home() {
	return (
		<div className="px-20">
			<Suspense fallback={<Loader />}>
				<div className="flex flex-col gap-2">
					<CustomPlayer
						trackMetaData={{
							trackTitle: "Old Souls",
							artistName: "Blue Cloud",
							date: "3-27-2024",
							genres: ["bounce", "house"],
						}}
						url="/testTrack.mp3"
						comments={[
							{
								id: "comment1",
								time: 10,
								imageSrc: "/testImage.png",
							},
							{
								id: "comment2",
								time: 30,
								imageSrc: "/testImage.png",
							},
						]}
					/>
					{/* <CustomPlayer
						trackMetaData={{
							trackTitle: "Old Souls",
							artistName: "Blue Cloud",
							date: "3-27-2024",
							genres: ["bounce", "house"],
						}}
						url="/testTrack.mp3"
						comments={[
							{
								id: "comment1",
								time: 10,
								imageSrc: "/testImage.png",
							},
							{
								id: "comment2",
								time: 30,
								imageSrc: "/testImage.png",
							},
						]}
					/>
					<CustomPlayer
						trackMetaData={{
							trackTitle: "Old Souls",
							artistName: "Blue Cloud",
							date: "3-27-2024",
							genres: ["bounce", "house"],
						}}
						url="/testTrack.mp3"
						comments={[
							{
								id: "comment1",
								time: 10,
								imageSrc: "/testImage.png",
							},
							{
								id: "comment2",
								time: 30,
								imageSrc: "/testImage.png",
							},
						]}
					/>
					<CustomPlayer
						trackMetaData={{
							trackTitle: "Old Souls",
							artistName: "Blue Cloud",
							date: "3-27-2024",
							genres: ["bounce", "house"],
						}}
						url="/testTrack.mp3"
						comments={[
							{
								id: "comment1",
								time: 10,
								imageSrc: "/testImage.png",
							},
							{
								id: "comment2",
								time: 30,
								imageSrc: "/testImage.png",
							},
						]}
					/>
					<CustomPlayer
						trackMetaData={{
							trackTitle: "Old Souls",
							artistName: "Blue Cloud",
							date: "3-27-2024",
							genres: ["bounce", "house"],
						}}
						url="/testTrack.mp3"
						comments={[
							{
								id: "comment1",
								time: 10,
								imageSrc: "/testImage.png",
							},
							{
								id: "comment2",
								time: 30,
								imageSrc: "/testImage.png",
							},
						]}
					/> */}
				</div>
			</Suspense>
		</div>
	);
}

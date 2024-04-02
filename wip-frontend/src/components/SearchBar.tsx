"use client";
import React from "react";
import { Input } from "@/components/util/input";
import { BsSearch as SearchIcon } from "react-icons/bs";
const SearchBar = () => {
	function handleSearch(): void {
		console.log("handling Search");
	}
	return (
		<div className="max-w-[400px] my-4 mx-auto flex gap-2 items-center justify-center">
			<Input className="w-full" />
			<SearchIcon
				size="1.5em"
				className="cursor-pointer"
				onClick={handleSearch}
			/>
		</div>
	);
};

export default SearchBar;

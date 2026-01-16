"use client";

import "./side-menu.css";
import { Label, ListBox } from "@heroui/react";
import { CalendarRange, CircleCheck, Sun, CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SideMenu() {
	const router = useRouter();

	useEffect(() => {
		router.prefetch("/today");
		router.prefetch("/weekly");
		router.prefetch("/monthly");
	}, [router]);

	return (
		<div className="side-menu side-menu-color h-screen">
			<div className="py-5">
				<Link
					href="/"
					className="ms-5 flex flex-row items-center mb-5 gap-3"
				>
					<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
						<CircleCheck className="text-white" />
					</div>
					<div className="text-xl font-semibold">Focus</div>
				</Link>
				<ListBox
					className="px-4"
					onAction={(key) => {
						router.push("/" + key);
					}}
				>
					<ListBox.Item id="today">
						<Label className="flex flex-row items-center gap-2">
							<Sun /> Today
						</Label>
					</ListBox.Item>
					<ListBox.Item id="weekly">
						<Label className="flex flex-row items-center gap-2">
							<CalendarRange /> Weekly View
						</Label>
					</ListBox.Item>
					<ListBox.Item id="monthly">
						<Label className="flex flex-row items-center gap-2">
							<CalendarIcon /> Monthly View
						</Label>
					</ListBox.Item>
				</ListBox>
			</div>
		</div>
	);
}

"use client";

import "./side-menu.css";
import { Label, ListBox, Button, useOverlayState } from "@heroui/react";
import {
	CalendarRange,
	CircleCheck,
	Sun,
	CalendarIcon,
	Plus,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Task from "../task/task.component";

export default function SideMenu() {
	const router = useRouter();
	const taskState = useOverlayState({ defaultOpen: false });

	useEffect(() => {
		router.prefetch("/today");
		router.prefetch("/weekly");
		router.prefetch("/monthly");
	}, [router]);

	return (
		<div className="side-menu side-menu-color h-screen">
			<div className="py-5 px-5 flex h-full flex-col">
				<Link
					href="/"
					className="flex flex-row items-center mb-5 gap-3 ps-1"
				>
					<div className="flex h-10 w-10 items-center justify-center rounded-field bg-primary">
						<CircleCheck className="text-white" />
					</div>
					<div className="text-xl font-semibold">Focus</div>
				</Link>
				<ListBox
					className="ps-0"
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
				<Button
					className="bg-primary w-full mt-auto rounded-field"
					onClick={() => taskState.open()}
				>
					<Plus /> Add Task
				</Button>
				<Task
					isOpen={taskState.isOpen}
					onOpenChange={taskState.setOpen}
				/>
			</div>
		</div>
	);
}

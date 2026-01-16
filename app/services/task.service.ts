export type SaveTaskPayload = {
	title: string;
	description: string;
};

export type TaskItem = {
	id: string;
	title: string;
	description: string;
};

const apiBaseUrl = process.env.NEXT_PUBLIC_TASK_API_URL;

export async function saveTask(payload: SaveTaskPayload) {
	const response = await fetch(`${apiBaseUrl}/tasks`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			title: payload.title,
			description: payload.description
		})
	});

	if (!response.ok) {
		throw new Error("Failed to save task");
	}

	return response.json();
}

export async function getTasks() {
	const response = await fetch(`${apiBaseUrl}/tasks`, {
		method: "GET",
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error("Failed to get tasks");
	}

	return (await response.json()) as TaskItem[];
}


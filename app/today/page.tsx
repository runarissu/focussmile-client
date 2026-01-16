import * as taskService from "@/app/services/task.service";

export default async function Today() {
	const tasks = await taskService.getTasks();

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl font-semibold">Today</h1>
			<div className="overflow-x-auto">
				<table className="min-w-full border-collapse">
					<thead>
						<tr className="text-left border-b">
							<th className="py-2 pr-4 font-medium">Title</th>
							<th className="py-2 font-medium">Description</th>
						</tr>
					</thead>
					<tbody>
						{tasks.length === 0 ? (
							<tr>
								<td className="py-3 text-sm text-foreground-500" colSpan={2}>
									No tasks yet.
								</td>
							</tr>
						) : (
							tasks.map((task) => (
								<tr key={task.id} className="border-b last:border-b-0">
									<td className="py-2 pr-4 align-top font-medium">
										{task.title}
									</td>
									<td className="py-2 align-top text-sm text-foreground-700">
										{task.description}
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
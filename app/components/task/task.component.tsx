import {
	Modal,
	Button,
	TextField,
	Label,
	Input,
	Form,
	TextArea
} from "@heroui/react";
import { useState } from "react";
import { saveTask } from "@/app/services/task.service";

type TaskProps = Readonly<{
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}>;

export default function Task({ isOpen, onOpenChange }: TaskProps) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSave = async () => {
		if (!title.trim()) {
			return;
		}

		await saveTask({
			title: title.trim(),
			description: description.trim()
		});
	};

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
			<Modal.Backdrop isDismissable={false}>
				<Modal.Container>
					<Modal.Dialog className="w-[500px]">
						<Modal.CloseTrigger />
						<Modal.Header>
							<Modal.Heading>
								What's need to be done?
							</Modal.Heading>
						</Modal.Header>
						<Modal.Body className="py-3 px-3">
							<Form className="flex flex-col gap-3">
								<TextField
									isRequired
									className="w-full gap-3"
									name="task"
									type="text"
								>
									<Label>Task</Label>
									<Input
										placeholder="Task title..."
										value={title}
										onChange={(event) => setTitle(event.target.value)}
									/>
								</TextField>
								<Label htmlFor="description">Detailed notes</Label>
								<TextArea
									name="description"
									placeholder="Any details here..."
									rows={4}
									value={description}
									onChange={(event) => setDescription(event.target.value)}
								/>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button
								className="w-full bg-primary rounded-field"
								slot="close"
								onPress={handleSave}
							>
								Save
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}

import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
	name: "task",
	initialState: {
		tasks: [],
		remainedTasks: 0,
		id: 0,
	},
	reducers: {
		add(state, action) {
			const newTask = action.payload;

			state.tasks.push({
				key: ++state.id,
				title: newTask.title,
				status: newTask.status,
			});
			state.remainedTasks++;
		},
		delete(state, action) {
			const taskId = action.payload;
			state.tasks = state.tasks.filter((task) => task.key !== taskId);
			state.remainedTasks = state.tasks.length;
		},
		edit(state) {},
		done(state) {},
	},
});

export const taskActions = taskSlice.actions;

export default taskSlice;

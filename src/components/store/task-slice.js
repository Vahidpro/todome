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
				// Number((Math.random() * 1000).toFixed()),
				title: newTask.title,
				status: newTask.status,
			});
		},
		delete(state, action) {
			// const id = action.payload;
		},
		edit(state) {},
		done(state) {},
	},
});

export const taskActions = taskSlice.actions;

export default taskSlice;

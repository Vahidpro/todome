import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
	name: "task",
	initialState: false,
	reducers: {
		delete(state) {},
		edit(state) {},
		done(state) {},
	},
});

export default taskSlice;

import "./Filters.css";
const Filters = () => {
	return (
		<div className="filter-container">
			<select className="filter-selector">
				<option>All Tasks</option>
				<option>Completed</option>
				<option>Active</option>
				<option>Delayed</option>
			</select>
		</div>
	);
};
export default Filters;

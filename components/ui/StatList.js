import Stat from "./Stat";

const StatList = ({ list }) => (
	<div className="grid grid-cols-1 md:grid-cols-4">
		{list.map((stat) => (
			<Stat key={stat.title} statData={stat} />
		))}
	</div>
);

export default StatList;

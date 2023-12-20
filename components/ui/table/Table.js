import TableHeader from "./TableHeader";

const Table = ({
	tableHeaders = ["Header 1", "Header 2", "Header 3", "Header 4"],
	children,
}) => {
	return (
		<table className="w-full">
			<thead className="w-full">
				<tr>
					{tableHeaders.map((header, index) => (
						<TableHeader key={index} header={header} />
					))}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
};

export default Table;

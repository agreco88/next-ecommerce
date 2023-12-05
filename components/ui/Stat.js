import Link from "next/link";

const Stat = ({ statData }) => (
	<Link
		href={statData.href}
		className="group flex flex-col gap-3 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
	>
		<h2 className={`text-2xl font-semibold`}>
			{statData.title}
			<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
				-&gt;
			</span>
		</h2>
		<p className={`max-w-[30ch] text-sm opacity-50`}>{statData.desc}</p>
	</Link>
);

export default Stat;

import { RawNodeDatum } from "react-d3-tree";

export const mainData: RawNodeDatum[] = [
	{
		name: "المفوض العام",
		attributes: {
			department: "المفوضية العامة",
		},
		children: [
			{ name: "نائب المفوض العام" },
			{ name: "المفوض الإداري" },
			{
				name: "مفوض المناهج",
				children: [
					{
						name: "مفوض الجراميز",
						children: [
							{ name: "مفوض الجراميز الأول" },
							{ name: "مفوض الجراميز الثاني" },
						],
					},
					{
						name: "مفوض البرامج",
						children: [
							{ name: "مفوض البرامج الأول" },
							{ name: "مفوض البرامج الثاني" },
						],
					},
				],
			},
		],
	},
];

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
// import Sidebar from "./Sidebar";

export const SidebarData = [
{
	title: "Home",
	path: "/home",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Our Aim",
		path: "/home/about-us",
		icon: <IoIcons.IoIosPaper />,
	},
	// {
	// 	title: "Our Vision",
	// 	path: "/about-us/vision",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	],
},
{
	title: "Media",
	path: "/media",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Latest Sports",
		path: "/media/sports",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Latest Science",
		path: "/media/science",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Latest Enteriment",
		path: "/media/enteriment",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Latest Tech",
		path: "/media/technology",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Latest Business",
		path: "/media/business",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Latest Health",
		path: "/media/health",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Events",
	path: "/events",
	// icon: <FaIcons.FaPhone />,
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
	subNav: [
		{
			title: "United Kingdom",
			path: "/events/uk",
			icon: <IoIcons.IoIosPaper />,
			cName: "sub-nav",
		},
		{
			title: "United States",
			path: "/events/us",
			icon: <IoIcons.IoIosPaper />,
			cName: "sub-nav",
		},
		{
			title: "Japan",
			path: "/events/jp",
			icon: <IoIcons.IoIosPaper />,
			cName: "sub-nav",
		},
		{
			title: "Australia",
			path: "/events/austrilia",
			icon: <IoIcons.IoIosPaper />,
			cName: "sub-nav",
		},
	]
},
{
	// title: "Setting",
	// path: "/settings",
	// icon: <FaIcons.FaEnvelopeOpenText />,
	title: "SignOut",
	path: "/sign-in",
	icon: <FaIcons.FaEnvelopeOpenText />,


	// iconClosed: <RiIcons.RiArrowDownSFill />,
	// iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	// {
	// 	title: "Account",
	// 	path: "/settings/profile",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	// {
	// 	title: "SignOut",
	// 	path: "/sign-in",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	// {
	// 	title: "Sign out",
	// 	path: "/events/events2",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	],
},
{
	title: "Support",
	path: "/support",
	icon: <IoIcons.IoMdHelpCircle />,
},
];

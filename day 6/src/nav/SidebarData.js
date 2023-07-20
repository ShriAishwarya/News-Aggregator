import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";


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
		path: "/about-us/aim",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Our Vision",
		path: "/about-us/vision",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Media",
	path: "/services",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Latest Sports",
		path: "/services/services1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Latest Science",
		path: "/services/services2",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Latest Enteriment",
		path: "/services/services3",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Latest Tech",
		path: "/services/services4",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Setting",
	path: "/events",
	icon: <FaIcons.FaEnvelopeOpenText />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Account",
		path: "/events/events1",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Sign in",
		path: "/events/events2",
		icon: <IoIcons.IoIosPaper />,
	},
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

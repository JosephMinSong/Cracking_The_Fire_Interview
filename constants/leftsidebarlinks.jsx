export const sidebarLinks = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="2em"
				viewBox="0 0 576 512"
				style={{ fill: "#fb923c" }}
			>
				<path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
			</svg>
		),
		route: "/",
		label: "Home",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="2em"
				viewBox="0 0 448 512"
				style={{ fill: "#fb923c" }}
				className="createpostbutton"
			>
				<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
			</svg>
		),
		route: "/createpost",
		label: "Create Post",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="2em"
				viewBox="0 0 384 512"
				style={{ fill: "#fb923c" }}
			>
				<path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
			</svg>
		),
		route: "/savedposts",
		label: "Saved Posts",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="2em"
				viewBox="0 0 448 512"
				style={{ fill: "#fb923c" }}
			>
				<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
			</svg>
		),
		route: "/profile",
		label: "Profile",
	},
];
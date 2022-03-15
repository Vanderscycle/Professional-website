export interface NavigationButton {
	url: string;
	name: string;
}

export interface Cipher {
	date: string;
	user: string;
	type: string;
	data: string; //object later
}

export interface Project {
	imgSrcCall: string;
	url: string;
	title: string;
	description: string;
	hidden: false;
	badges: Badge[];
}

export interface Badge {
	msg: string;
	color: string;
	text: string;
}

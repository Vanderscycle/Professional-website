import axios from "axios";

// make it interractive by have a meme interface

export class ClientRest {
	baseEndpoint: string;
	constructor(url: string) {
		this.baseEndpoint = url;
	}

	async get(specificAddress: string): Promise<any> {
		try {
			return await axios.get(`${this.baseEndpoint}/${specificAddress}`);
		} catch (e) {
			console.warn(e);
		}
	}
}

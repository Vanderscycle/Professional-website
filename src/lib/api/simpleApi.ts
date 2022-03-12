import axios from "axios";

variable;
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

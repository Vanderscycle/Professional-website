import type { BlogPost } from "$lib/interfaces";
import { variables } from "$lib/variables";
import axios from "axios";
variables;

// make it interractive by have a meme interface

export class GoRestClient {
	baseUrl: string;
	groupEndpoint: string;
	constructor(group: string) {
		this.groupEndpoint = group;
		this.baseUrl = `http://${variables.goBackendURL}:${variables.goBackendPort}/${group}`;
		console.log(this.baseUrl, group);
	}

	async get(): Promise<GoRestClient[]> {
		try {
			const res = await axios.get(`${this.baseUrl}`);
			if (res.status === 200) {
				return res.data;
			}
		} catch (e) {
			console.warn(e);
		}
	}

	async getSingle(id: number): Promise<GoRestClient> {
		try {
			const res = await axios.get(`${this.baseUrl}/${id}`);
			if (res.status === 200) {
				return res.data;
			}
		} catch (e) {
			console.warn(e);
		}
	}

	async post(payload: BlogPost): Promise<BlogPost> {
		try {
			return await axios.post(`${this.baseUrl}`, payload);
		} catch (e) {
			console.warn(e);
		}
	}

	async delete(id: number): Promise<string> {
		try {
			return await axios.delete(`${this.baseUrl}/${id}`);
		} catch (e) {
			console.warn(e);
		}
	}

	async patch(id: number, payload: BlogPost): Promise<BlogPost> {
		try {
			return await axios.patch(`${this.baseUrl}/${id}`, payload);
		} catch (e) {
			console.warn(e);
		}
	}
}

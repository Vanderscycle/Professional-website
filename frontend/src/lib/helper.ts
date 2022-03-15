import type { GoRestClient } from "./api/simpleApi";

// https://www.sitepoint.com/delay-sleep-pause-wait/
export function sleep(ms: number): Promise<any> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// https://svelte.dev/examples/custom-js-transitions
export function typewriter(node, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text: string = node.textContent;
	const duration: number = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}

export async function httpMethodSwitch(
	api: GoRestClient,
	apiData: any,
	method: string,
	index = "",
	payload?: object
) {
	//TODO move to otherwebsite  once filtering is done
	let res: any;
	switch (method) {
		case "GET":
			res = await api.get(index);
			if (index !== "") {
				apiData = [...apiData, res];
			} else {
				apiData = [res];
			}
			break;
		case "POST":
			res = await api.post(payload);
			apiData = [...apiData, res];
			break;
		case "DELETE":
			res = await api.delete(index);
			// apiData = apiData.filter((v) => v.ID !== index);
			break;
		case "PATCH":
			res = await api.patch(index, payload);
			apiData = [...apiData, res];
			break;
	}
	if (!res) {
		console.warn("error");
	} else {
		return apiData;
	}
}

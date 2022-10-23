import { fetcher } from "../utils/utils";

const commonHeaders = new Headers();
commonHeaders.append("Accept", "*/*");
commonHeaders.append("Accept-Language", "zh-CN,zh;q=0.9");
commonHeaders.append("Cache-Control", "no-cache");
commonHeaders.append("Connection", "keep-alive");
commonHeaders.append("Content-Type", "application/json");

const queryLighthouseAPI = async (payload) => {
	const res = await fetcher('http://localhost:3000/api/query', {
		method: 'POST',
		headers: commonHeaders,
		body: JSON.stringify(payload),
	});
	return res;
};

export default queryLighthouseAPI;
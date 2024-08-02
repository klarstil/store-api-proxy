import { proxyRequest } from "#imports";

export default defineEventHandler(async (event) => {
    const target = `https://korodrogerie.de${event.path}`;
    const response = await proxyRequest(event, target);

    return response;
});

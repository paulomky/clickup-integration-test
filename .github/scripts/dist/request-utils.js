import { env } from './env.js';
export function getDefaultHeaders() {
    return {
        'accept': 'application/json',
        'content-type': 'application/json;charset=utf-8',
        'Authorization': env.clickUpToken
    };
}
//# sourceMappingURL=request-utils.js.map
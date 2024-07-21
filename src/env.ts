export type TEndpointsList = {
    base:string
}
export type TEndpoints = {
    baseEndpoint:string,
}
class env implements TEndpoints {
    endpoints:TEndpointsList
    constructor() {
        //@ts-ignore
        const env = window.env
        if(!env.hasOwnProperty('endpoints'))
            throw new Error('.env endpoints undefined')
        Object.keys(env.endpoints).forEach((key: any) => {
            if (!(env.endpoints[key]?.length > 0)) {
                throw new Error(`.env '${key}' has not value`)
            }
            if ((env.endpoints[key][env.endpoints[key].length - 1] != "/" && key != "documentation")) {
                env.endpoints[key] = env.endpoints[key] + "/"
            }
        })
        this.endpoints = env.endpoints as TEndpointsList
    }
    get baseEndpoint():string {
        if(typeof this.endpoints.base === "string" && this.endpoints.base.length > 0)
            return this.endpoints.base
        throw new Error('.env id endpoint undefined')
    }
}
export default new env() as TEndpoints
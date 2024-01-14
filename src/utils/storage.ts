export class Localstorage {

    public async setKey(storageKey: string, val:string) {
        return this.set(storageKey, val)
    }

    public getKey(storageKey: string) {
        return this.get(storageKey)
    }

    private get(storageKey: string)
    {
        return localStorage.getItem(storageKey)
       
    }

    private async set(storageKey: string, val: string)
    {
        return localStorage.setItem(storageKey, val)
    }
}

export function localStorageGetItem(storageKey: string): string | null {
    if (typeof window !== "undefined") {
        // 在浏览器环境下执行 localStorage 相关操作
        return localStorage.getItem(storageKey)
    }
    return ''
}

export function localStorageSetItem(storageKey: string, val: string | null)
{
    if (val === null) {
        val = ''
    }
    return localStorage.setItem(storageKey, val)
}
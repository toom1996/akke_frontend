import { buildIndex } from "@/api/v1";

let container: null|Akke = null
interface buildDataInterface{
    columns: []
}
class Akke {

    private __buildData:buildDataInterface|undefined = undefined

    // 
    private __initBuildData(): Promise<buildDataInterface | undefined> {
        return new Promise((resolve) => {
            if (this.__buildData === undefined) {
                buildIndex({
                    token: '213'
                })
            }
        })
    }

    async getColumns()
    {
        if (this.__buildData === undefined) {
            await this.__initBuildData()
        }
        return this.__buildData?.columns
    }
}
export default () => {
    if (container === null) {
        container = new Akke()
    }

    return container
}
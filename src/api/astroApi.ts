import { Exception } from "sass"

function getFetchServer () {
    return import.meta.env.FETCH_SERVER
}

function getFetchPort() {
    if (getFetchServer() == 'JSONSERVER') {
        return import.meta.env.JSONSERVER_PORT
    }

    if (getFetchServer() == 'GIN') {
        return import.meta.env.GIN_PORT
    }

    if (getFetchServer() == 'PORD') {
        return import.meta.env.PORD_PORT
    }

    throw new Error('unknown fetch server')
}



export const HEADER_COLUMNS = (() => {
    return getFetchServer() == 'JSONSERVER' ? `http://localhost:${getFetchPort()}/headers` : `http://localhost:${getFetchPort()}/api/v1/frontend/header/columns`
})()

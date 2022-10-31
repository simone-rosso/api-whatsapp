import { v4 } from 'uuid'

export class Lead {
    readonly uuid: string
    readonly phone: string
    readonly message: string

    constructor({ phone, message }: { phone: string, message: string }) {
        this.uuid = v4()
        this.phone = phone
        this.message = message
    }
}
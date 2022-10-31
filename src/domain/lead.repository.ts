import { Lead } from '../domain/lead'

export default interface LeadRepository {
    save({ phone, message }: { phone: string, message: string }): Promise<Lead | undefined | null>
    getDetail(id: string): Promise<Lead | undefined | null>
}
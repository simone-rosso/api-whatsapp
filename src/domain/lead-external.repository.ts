export interface LeadExternalRepository {
    sendMsg({ phone, message }: { phone: string, message: string }): Promise<any>
} 
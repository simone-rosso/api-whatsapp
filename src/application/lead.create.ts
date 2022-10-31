import LeadExternalRepository from "../domain/lead-external.repository";
import LeadRepository from "../domain/lead.repository";

export class LeadCreate {
    private leadRepository: LeadRepository;
    private leadExternal: LeadExternalRepository;
    constructor(respositories: [LeadRepository, LeadExternalRepository]) {
        const [leadRepository, leadExternal] = respositories;
        this.leadRepository = leadRepository;
        this.leadExternal = leadExternal;
    }

    public async sendMessageAndSave({
        phone,
        message
    }: {
        phone: string;
        message: string;
    }) {
        const responseDbSave = await this.leadRepository.save({ message, phone });//TODO DB
        const responseExSave = await this.leadExternal.sendMsg({ message, phone });//TODO enviar a ws
        return { responseDbSave, responseExSave };
    }
}
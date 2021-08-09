export class EmailMessage {
    BCc: EmailAddress[];
    Cc: EmailAddress[];
    ToAddresses: EmailAddress[];
    Attachment: EmailAttachmentAddress[];
    FromAddresses: EmailAddress[];
    Subject: string;
    Content: string;
}


export class EmailAddress {
    Name: string;
    Address: string;
    MessageId: string;
}

export class EmailAttachmentAddress {
    Link: string;
    MessageId: string;
    FileName:string;
}

export class SendEmailModel {
    toDraft: string;
    ccDraft:string;
    fromDraft:string;
    bccDraft:string;
    subjectDraft:string;
    draftText:string;
    draftid?:string;
    AttachmentLists?:any[];
}

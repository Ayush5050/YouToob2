export class GridData {
    rows: any[];
    header: HeaderFormat[];
    reference: RefrenceColumn[];
    isEmailView?:boolean;
    primaryKey:string='id'
}

export class HeaderFormat {
    FieldName: string;
    DisplayHead: string;
    Type: string;
    ValueField?: string;
}

export class RefrenceColumn {
    FieldName: string;
    data: string;
    IdField: string;
    ValueField?: string;
}

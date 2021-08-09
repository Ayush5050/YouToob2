import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string, column?: string[]): any[] {

        if (!items) { return []; }
        if (!searchText) { return items; }

        searchText = searchText.toLowerCase().trim();
        // let returnList:any[]=[];
        searchText.split(" ").forEach(s => {
            items = items.filter(it => {
                const dataObj: any = it;
                let returnFlag = false;
                _.each(dataObj, (value, key) => {
                    if (column != undefined && column != null && column.length > 0) {
                       if(column.findIndex(v=>v.toLowerCase()==(String(key).toLowerCase()))>-1){
                        // if (column.includes((String(key)).toLowerCase())) {
                            const dataValue: any = value;
                            if (s != '') {
                                if (dataValue && dataValue.toString().toLowerCase().includes(s)) {
                                    returnFlag = true;
                                }
                            }
                        }
                    } else {
                        const dataValue: any = value;
                        if (s != ''){
                            if (dataValue && dataValue.toString().toLowerCase().includes(s)) {
                                returnFlag = true;
                            }
                        }
                    }
                });
                return returnFlag;
            });
            //    returnList= _.union(returnList,t);
        })
        return items;

        // return items.filter(it => {
        //     const dataObj: any = it;
        //     let returnFlag = false;
        //     _.each(dataObj, (value, key) => {
        //         const dataValue: any = value;
        //         if (searchText != '') {
        //             if (dataValue && dataValue.toString().toLowerCase().includes(searchText)) {
        //                 returnFlag = true;
        //             }
        //         }
        //     });
        //     return returnFlag;
        // });
    }
}

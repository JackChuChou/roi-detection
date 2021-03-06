// import { CANCER_TYPE as cancerType } from '../constant';
// import { ISummaryItem, ISummaryStatisticsItem, ISummaryTotal } from '../store';
import { ISummaryStatisticsItem } from '../store';

export function resolveSummary(data: any){
    const summaryStatistic: ISummaryStatisticsItem[] = [];
    for(let i=0; i<data.length; i++){
        summaryStatistic[i] = {
            labelFalseNumber: data[i].false_count,
            labelTrueNumber: data[i].true_count,
            id: data[i].cancer_id,
            nonLabelNumber: data[i].unlabeled_count,
            notSureNumber: data[i].not_sure_count,
            selectFalse: false,
            selectNotSure: false,
            selectTrue: false,
            selectUnlabelled: false,
            showDetialFlag: true,
            subject: data[i].cancer_type,
            totalNumber: data[i].total_count
        }
    }
    return summaryStatistic;
    // const summaryData: ISummaryTotal = {
    //     N: {
    //         false: [],
    //         notSure: [],
    //         true: [],
    //         unlabelled: []
    //     },
    //     R: {
    //         false: [],
    //         notSure: [],
    //         true: [],
    //         unlabelled: []
    //     },
    //     S: {
    //         false: [],
    //         notSure: [],
    //         true: [],
    //         unlabelled: []
    //     },
    //     T: {
    //         false: [],
    //         notSure: [],
    //         true: [],
    //         unlabelled: []
    //     },
    //     X: {
    //         false: [],
    //         notSure: [],
    //         true: [],
    //         unlabelled: []
    //     },
    //     // statistics: []
    // }
    // let statisticsData: ISummaryStatisticsItem[] = [];
    // let i;
    // for(i=0; i<data.length; i++){
    //     const r = data[i];
    //     const v:ISummaryItem = {
    //         roiId: r.roi_id,
    //         roiUrl: r.roi_url,
    //         status: r.status,
    //         svsId: r.svs_id,
    //         svsUrl: r.svs_url,
    //         type: r.cancer_type,
    //         userName: r.user_name
    //     };
    //     switch(r.cancer_type+'-'+r.status){
    //         case 'N-true':
    //             summaryData.N.true.push(v);
    //             break;
    //         case 'N-false':
    //             summaryData.N.false.push(v);
    //             break;
    //         case 'N-notsure':
    //             summaryData.N.notSure.push(v);
    //             break;
    //         case 'N-unlabeled':
    //             summaryData.N.unlabelled.push(v);
    //             break;
    //         case 'R-true':
    //             summaryData.R.true.push(v);
    //             break;
    //         case 'R-false':
    //             summaryData.R.false.push(v);
    //             break;
    //         case 'R-notsure':
    //             summaryData.R.notSure.push(v);
    //             break;
    //         case 'R-unlabeled':
    //             summaryData.R.unlabelled.push(v);
    //             break;
    //         case 'S-true':
    //             summaryData.S.true.push(v);
    //             break;
    //         case 'S-false':
    //             summaryData.S.false.push(v);
    //             break;
    //         case 'S-notsure':
    //             summaryData.S.notSure.push(v);
    //             break;
    //         case 'S-unlabeled':
    //             summaryData.S.unlabelled.push(v);
    //             break;
    //         case 'T-true':
    //             summaryData.T.true.push(v);
    //             break;
    //         case 'T-false':
    //             summaryData.T.false.push(v);
    //             break;
    //         case 'T-notsure':
    //             summaryData.T.notSure.push(v);
    //             break;
    //         case 'T-unlabeled':
    //             summaryData.T.unlabelled.push(v);
    //             break;
    //         case 'X-true':
    //             summaryData.X.true.push(v);
    //             break;
    //         case 'X-false':
    //             summaryData.X.false.push(v);
    //             break;
    //         case 'X-notsure':
    //             summaryData.X.notSure.push(v);
    //             break;
    //         case 'X-unlabeled':
    //             summaryData.X.unlabelled.push(v);
    //             break;
    //     }
    // }
    // statisticsData = [
    //     {
    //         labelFalseNumber: summaryData.N.false.length,
    //         labelTrueNumber: summaryData.N.true.length,
    //         nonLabelNumber: summaryData.N.unlabelled.length,
    //         notSureNumber: summaryData.N.notSure.length,
    //         selectFalse: false,
    //         selectNotSure: false,
    //         selectTrue: false,
    //         selectUnlabelled: false,
    //         // showDetialFlag: false,
    //         showDetialFlag: true,
    //         // subject: cancerType.N,
    //         subject: 'N',
    //         totalNumber: summaryData.N.false.length + 
    //             summaryData.N.true.length + 
    //             summaryData.N.unlabelled.length
    //     },
    //     {
    //         labelFalseNumber: summaryData.S.false.length,
    //         labelTrueNumber: summaryData.S.true.length,
    //         nonLabelNumber: summaryData.S.unlabelled.length,
    //         notSureNumber: summaryData.S.notSure.length,
    //         selectFalse: false,
    //         selectNotSure: false,
    //         selectTrue: false,
    //         selectUnlabelled: false,
    //         showDetialFlag: true,
    //         // showDetialFlag: false,
    //         // subject: cancerType.S,
    //         subject: 'S',
    //         totalNumber: summaryData.S.false.length + 
    //             summaryData.S.true.length + 
    //             summaryData.S.unlabelled.length
    //     },
    //     {
    //         labelFalseNumber: summaryData.R.false.length,
    //         labelTrueNumber: summaryData.R.true.length,
    //         nonLabelNumber: summaryData.R.unlabelled.length,
    //         notSureNumber: summaryData.R.notSure.length,
    //         selectFalse: false,
    //         selectNotSure: false,
    //         selectTrue: false,
    //         selectUnlabelled: false,
    //         showDetialFlag: true,
    //         // showDetialFlag: false,
    //         // subject: cancerType.R,
    //         subject: 'R',
    //         totalNumber: summaryData.R.false.length + 
    //             summaryData.R.true.length + 
    //             summaryData.R.unlabelled.length
    //     },
    //     {
    //         labelFalseNumber: summaryData.T.false.length,
    //         labelTrueNumber: summaryData.T.true.length,
    //         nonLabelNumber: summaryData.T.unlabelled.length,
    //         notSureNumber: summaryData.T.notSure.length,
    //         selectFalse: false,
    //         selectNotSure: false,
    //         selectTrue: false,
    //         selectUnlabelled: false,
    //         showDetialFlag: true,
    //         // showDetialFlag: false,
    //         // subject: cancerType.T,
    //         subject: 'T',
    //         totalNumber: summaryData.T.false.length + 
    //             summaryData.T.true.length + 
    //             summaryData.T.unlabelled.length
    //     },
    //     {
    //         labelFalseNumber: summaryData.X.false.length,
    //         labelTrueNumber: summaryData.X.true.length,
    //         nonLabelNumber: summaryData.X.unlabelled.length,
    //         notSureNumber: summaryData.X.notSure.length,
    //         selectFalse: false,
    //         selectNotSure: false,
    //         selectTrue: false,
    //         selectUnlabelled: false,
    //         showDetialFlag: true,
    //         // showDetialFlag: false,
    //         // subject: cancerType.X,
    //         subject: 'X',
    //         totalNumber: summaryData.X.false.length + 
    //             summaryData.X.true.length + 
    //             summaryData.X.unlabelled.length
    //     },
    // ];
    // const result = {
    //     statistics: statisticsData,
    //     total: summaryData
    // }
    // return result;
}

export function resolveNewSummary(data:any, preStatistic:ISummaryStatisticsItem[]){
    const summaryStatistic: ISummaryStatisticsItem[] = [];
    for(let i=0; i<data.length; i++){
        for(let j=0; j<preStatistic.length; j++){
            if(preStatistic[j].subject === data[i].cancer_type){
                summaryStatistic[i] = {
                    ...preStatistic[j],
                    labelFalseNumber: data[i].false_count,
                    labelTrueNumber: data[i].true_count,
                    nonLabelNumber: data[i].unlabeled_count,
                    notSureNumber: data[i].not_sure,
                    // selectFalse: false,
                    // selectNotSure: false,
                    // selectTrue: false,
                    // selectUnlabelled: false,
                    // showDetialFlag: true,
                    // subject: data[i].cancer_type,
                    // totalNumber: data[i].total_count
                }
                break;
            }
        }
    }
    return summaryStatistic;
}
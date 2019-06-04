// export const BASE_URL = 'http://222.20.79.250:8081/api/';
// export const BASE_URL ='http://222.20.79.123:5000';
export const BASE_URL = 'http://222.20.79.250:5000';

interface cancerType{
    [N:string]: string,
    R: string,
    S: string,
    T: string,
    X: string
}
export const CANCER_TYPE:cancerType = {
    N: '粘液型',
    R: '乳头型',
    S: '实体型',
    T: '贴壁型',
    X: '腺泡型'
};

export const PIC_SIZE = 600;
export const ROI_SCORE_THRESHOLD = 0.1;
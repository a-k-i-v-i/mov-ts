

export interface IPageState {
    page : any[],
    loader : boolean,
    error : null | string
}


export enum EnumActionTypes {
    FETCH_PAGE = 'FETCH_PAGE',
    FETCH_PAGE_SUCCSESS = 'FETCH_PAGE_SUCCSESS',
    FETCH_PAGE_ERROR = 'FETCH_PAGE_ERROR'
}

export interface IFetchPage {
    type : EnumActionTypes.FETCH_PAGE
}
export interface IFetchPageSuccsess {
    type: EnumActionTypes.FETCH_PAGE_SUCCSESS,
    payload : any[]
}
export interface IFetchPageError {
    type : EnumActionTypes.FETCH_PAGE_ERROR,
    payload? : any
}

export type TypePageAction = IFetchPage | IFetchPageSuccsess | IFetchPageError
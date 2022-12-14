import {Observable} from 'rxjs';

import {DataItemInterface, DataListInterface} from "./dataprovider";
import {ProviderToken} from "@angular/core";

export enum FacetType {
    NUMBER,
}

export enum FieldType {
    STRING,
    STRING_MULTILINE,
    BOOLEAN,
    NUMBER,
    UID,
    FLOAT,
    DATE,
    PASSWORD,
    EUID,
    DATETIME,
    FILE,
    CODE,
}

export enum ViewType {
    ELECTRONIC_SYMBOL,
    ELECTRONIC_LAYOUT,
    PART_SYMBOL,
    CELL,
}

export const ICONS_TYPES: any = {};

ICONS_TYPES[FieldType.DATE] =
    '/assets/icons/01-Interface-Essential/21-Date-Calendar/calendar-date.svg';
ICONS_TYPES[FieldType.EUID] =
    '/assets/icons/01-Interface-Essential/27-Link-Unlink/hyperlink-3.svg';
ICONS_TYPES[FieldType.STRING_MULTILINE] =
    '/assets/icons/01-Interface-Essential/34-Text-Formating/text-style.svg';
ICONS_TYPES[FieldType.STRING] =
    '/assets/icons/01-Interface-Essential/34-Text-Formating/text-style.svg';
ICONS_TYPES[FieldType.UID] =
    '/assets/icons/01-Interface-Essential/28-Share/share.svg';
ICONS_TYPES[FieldType.BOOLEAN] =
    '/assets/icons/01-Interface-Essential/13-Controls/settings-toggle-horizontal.svg';
ICONS_TYPES[FieldType.NUMBER] =
    '/assets/icons/01-Interface-Essential/51-Paginate/paginate-filter-10.svg';
ICONS_TYPES[FieldType.DATETIME] =
    '/assets/icons/01-Interface-Essential/18-Time/watch-time.svg';
ICONS_TYPES[FieldType.FILE] =
    '/assets/icons/11-Content/02-Books/book-download-1.svg';
ICONS_TYPES[FieldType.CODE] =
    '/assets/icons/04-Programing-Apps-Websites/01-Programing/programming-browser-1.svg';

export interface Facet {
    name: string;
    type: FacetType;
}

export interface EntityLink {
    facets?: Facet[];
    titleField: string;
    multiple: boolean;
}

export interface FormField {
    title: string;
    type: FieldType;
    link?: EntityLink;
    format?: string;
    key: string;
}

export interface Column {
    name: string;
    key: string;
}

export interface DataView {
    title: string;
    component: ViewType;
    dataFrom: string;
}

export interface FormConfig {
    title: string;
    nameField?: string;
    fields: FormField[];
    commands: string[];
    views?: DataView[];
}

export interface DataPageConfig extends FormConfig {
    title: string;
    listQ: string;
    deleteQ?: string;
    massCommand?: boolean
    dataProvider: ProviderToken<DataListInterface | DataItemInterface>
}

export interface EntityTitle {
    title: string;
    uid: string;
}

export interface DataProvider {
    initObserver(str: Observable<string>): Observable<EntityTitle[]>;

    byId(id: string): Observable<string>;
}


export interface Article {
    name: string;
    version: string;
}

//todo move this to another module
export enum TextNodeType {
    PARAGRAPH = 'PARAGRAPH',
    HEADER1 = 'HEADER1',
    HEADER2 = 'HEADER2',
    HEADER3 = 'HEADER3',
    IMAGE = 'IMAGE',
    CODE = 'CODE'
}

//todo move this to another module
export interface ContentNode {
    uid?: string;
    before?: string;
    type: TextNodeType;
    value: string;
}

export interface ArticleVersion {
    articleId: string;
    blocks: ContentNode[];
}

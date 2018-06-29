export class Result {
  public constructor(
      public id: string,
      public fileName: string,
      public lastUpdateDate: Date,
      public fileSize: number,
      public fileType: string,
      public thumbnail: string,
      public createdBy: string,
      public author: string,
      public documentFormat: string,
      public documentId: string,
      public documentSubType: string,
      public documentType: string,
      public endIndex: string,
      public filePath: string,
      public indexType: string,
      public logRun: string,
      public startIndex: string,
      public title: string,
      public url: string,
      public wellbore: string,
      public documentDate: string,
      public longitude: number,
      public latitude: number,
      public score: number,
      public isSelected: boolean,
      public classificationValue: string[],
      public classification: string,
  ) { }
}

// TODO : Attributes will be change based on the result what you want to fetch.

#  Introduction

  

Document viewer widget allows user to view displays document WKE & pages the search keyword has matched.

* Node 6.10.0 or higher

* NPM 3 or higher

  

User permissions:- User should have permission to view the dataset. Example - To view documents of kind oga:wellFileRecord user should be part of oga.viewers group in datalake. To obtain the same, please contact Lal Verma (LVerma@slb.com).

  

### Features:-

# Getting Started
##  Installation process
 To consume the Document search listing widget in your Angular project, run the below npm command 

  ```bash
  npm install @slb-dtw-packages/wke-document-view --save
  ```

## Input & Output

### Input -

- `keyword` <string> (Required) - search keyword.

- `sToken` [Required] : sToken is needed for enrichment fetchservice which is used to fetch well details from WKE store. s-Auth service is used to obtain the valid sToken for given user.

- `slbAccountId` [Required] : slbAccountId is needed for enrichment fetchservice which is used to fetch well details from WKE store. s-Auth service is used to obtain the valid sToken for given user.

- `closeIconVisibility` [Optional] : Needs to be set to true/false depending on if you want to display close icon or not.

### Output events-

- `documentClick` - document object selected on single click

## How to consume

- Import WkeDocumentModule to any module. For example:

  

   ```javascript
    ...
    import { HttpClientModule } from '@angular/common/http';
    import { WkeDocumentModule } from '@slb-dtw-packages/wke-document-view';
    ...
    @NgModule({
    ...
    imports: [
  	BrowserModule,
    HttpClientModule,
    WkeDocumentModule()
    ],
    ...
    })
    export class AppModule { }
```
- Add html template selector in any html page. For example:

```html
 <wke-document-view [documentViewerServiceURL]='url' [sToken]='sToken' [documentId]='documentId' [slbAccountId]='tenant' [query]='query' [closeIconVisibility]="closeIconVisibility" (close)="closeDocView()">
 </wke-document-view>
```


#  Introduction

  

Search listing widget is able to display the pages (images) of document with page navigation to navigate previous page, next page and any of the pages of the document.

  

Prerequisites: - Search listing widget is written in Angular4 CLI. It has the following dependencies

* Node 6.10.0 or higher

* NPM 3 or higher

  

User permissions:- User should have permission to view the dataset. Example - To view documents of kind oga:wellFileRecord user should be part of oga.viewers group in datalake. To obtain the same, please contact Lal Verma (LVerma@slb.com).

  

### Features:-

Load more - (Default) Search listing widget has a 'Load more' features which fetches the next set of documents based on your input *limit*.

# Getting Started
##  Installation process
 To consume the Document search listing widget in your Angular project, run the below npm command 

  ```bash
  npm install @slb-dtw-packages/wke-document-view --save
  ```

## Input & Output

### Input -

- keyword <string> (Required) - search keyword.

- sToken <string> (Required) - Takes S-Auth token of user. For more information related to S-Auth token:- https://wiki.slb.com/pages/viewpage.action?pageId=56375807

- limit <string> (*Optional*) - Number of results per page. Default value is *25*.

- mode <string> (horizontal | vertical | wrap - *Optional*) - Changes display mode of the widget to horizonal, vertical or wrap. Default value *horizontal*

- enableSelection <boolean> (*Optional*) - Enable selection of documents on click & double click. Default value *false*.

### Output events-

- *documentClick* - document object selected on single click

- *documentDoubleClick* - document object selected on double click
  
## How to consume

- Import SearchListingModule to any module. For example:

  

   ```javascript
    ...
    import { HttpClientModule } from '@angular/common/http';
    import { SearchListingModule} from '@slb-dtw-packages/wke-document-view';
    ...
    @NgModule({
    ...
    imports: [
  	BrowserModule,
	  NoopAnimationsModule,
    HttpClientModule,
    SearchListingModule.forRoot()
    ],
    ...
    })
    export class AppModule { }
```
-  Add DLS tooltip css to your global css

```scss
  @import '~@slb-vanilla/vanilla-package/tooltip/tooltip-mode-light-compiled.css';
```
-  Add html template selector in any html page. For example:


```html
 <app-search-listing [sToken]='sToken' [keyword]='keyword' [limit]='limit'
    (documentClick)="onDocumentClick($event)"
     (documentDoubleClick)="onDocumentDoubleClick($event)"></app-search-listing>
```

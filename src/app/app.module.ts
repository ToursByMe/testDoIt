import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ListFooterComponent } from './components/list-footer/list-footer.component';
import { TodoDataService } from './todo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    ListFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent],
  exports: [ListHeaderComponent, TodoListComponent, TodoListItemComponent, ListFooterComponent]
})
export class AppModule { }

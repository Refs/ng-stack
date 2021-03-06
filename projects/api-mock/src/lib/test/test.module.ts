import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiMockModule } from '@ng-stack/api-mock';

import { ProxyApiMockService } from './proxy-api-mock.service';
import { PostsCommentsService } from './posts-comments.service';
import { SimpleService } from './simple.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, ApiMockModule.forRoot(ProxyApiMockService, { delay: 800 })],
  providers: [SimpleService, PostsCommentsService],
})
export class TestModule {}

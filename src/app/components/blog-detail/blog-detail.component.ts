import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogDetailService } from 'src/app/services/blog-detail.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit,
  OnChanges, AfterViewInit{
  @Input('blog-id') blogId: number = 0;
  blogHtmlContent! : string;
  
  constructor(private blogDetailService:BlogDetailService, 
    private route:ActivatedRoute,
    private cdref: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.reloadBlogDetails();
  }
  ngOnChanges(): void {
    this.reloadBlogDetails();
  }

  ngAfterViewInit(): void {
    this.reloadBlogDetails();
  }

  private reloadBlogDetails(){
    this.getBlogId().subscribe(isblogIdInRoute => {
      if(isblogIdInRoute){
        this.changeBlogDetail();
      }
      else{
        this.changeBlogDetail();
      }
    });
  }
  private changeBlogDetail(): void {
    if(this.blogId == 0){
      this.blogHtmlContent = '';
    }
    this.blogHtmlContent = this.blogDetailService.GetBlogDetail(this.blogId);
  }

  private getBlogId(): Observable<boolean>{
    return new Observable<boolean>( o  =>
    this.route.paramMap.subscribe( paramMap => {
      const blogIdString = paramMap.get('blogId');
      try{
        this.blogId = parseInt(blogIdString || '');
        o.next(true);
      }
      catch(err){
        console.log(`Unable to read blogId ${err}`)
        o.next(false);
      }
    }));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any;
  reviews: any;
  comments:any = [];
  id: any;
  reviewForm: FormGroup = this.fb.group({
    review_details: ['', []],
    review_rating: ['', []]
  })
  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    const routeparams = this.route.snapshot.paramMap;
    const id = routeparams.get('id');
    this.id = id;
    this.getProductDetail(id);
  }

  getProductDetail(id: any) {
    this.dataService.getProduct(id).subscribe((res: any) => {
      this.product = res.data;
      this.reviews = res.data.product_reviews;
      const comments = localStorage.getItem('comments'+ this.id)
      if(comments) {
        this.comments = JSON.parse(comments);
        this.reviews.push(...JSON.parse(comments));
      }
      console.log('Product:', this.product);
    })
  }


  addReview() {
    this.reviews.push(this.reviewForm.value);
    this.comments.push(this.reviewForm.value);
    this.reviewForm.reset();
    localStorage.setItem('comments'+ this.id, JSON.stringify(this.comments));
  }

}

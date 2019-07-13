import { Component, OnInit } from '@angular/core';

import { BookService } from '../shared/book.service'
import { NgForm } from '@angular/forms';

import { Bookmodel } from '../shared/bookmodel.model'
import Swal from 'sweetalert2'
declare var M:any;

@Component({
  selector: 'app-book-ui',
  templateUrl: './book-ui.component.html',
  styleUrls: ['./book-ui.component.css'],
  providers: [BookService]
})
export class BookUIComponent implements OnInit {

  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.resetForm();
    this.showbooklist();
  }
  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.bookservice.selectedbookmodel={
      _id: "",
      name: "",
      year: null,
      author: "",
      price: null,
      ISBN: ""
    }
  }

  onSubmit(form: NgForm){
    if(form.value._id == "" || form.value._id == null){
      this.bookservice.postbook(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.showbooklist();
        Swal.fire('Done!','Added Successfully.','success');
        //M.toast({html: "Saved Successfully", classes:"rounded"});
        }, (err)=>{
        if(err)
          console.log("Error:"+err);
      });
    }else{
      console.log(form.value);
      this.bookservice.updatebook(form.value).subscribe((res)=>{
        Swal.fire('Done!','Updated Successfully.','success');
        console.log(res);
        //M.toast({html: "Updated Successfully", classes:"rounded"});
        }, (err)=>{
        if(err)
          console.log("Error:"+err);
      });
      // this.showbooklist();
      // this.resetForm(form);
    }
  }

  showbooklist(){
    this.bookservice.getbooklist().subscribe((res)=>{
      this.bookservice.bookmodels = res as Bookmodel[];
    });
  }

  editbook(book: Bookmodel){
    this.bookservice.selectedbookmodel = book;
  }

  deletebook(book: Bookmodel, form: NgForm){
    Swal.fire({
      title: 'Confirm Action',
      text: "Are you sure?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if(result.value){
          this.bookservice.bookdelete(book._id).subscribe((res)=>{
          this.showbooklist();
          this.resetForm(form);
          Swal.fire('Done!','Deleted Successfully.','success');
          //M.toast({html: "Deleted Successfully", classes:"rounded"});
        });
      }
    });
  }
}


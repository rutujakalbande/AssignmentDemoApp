import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-home',
  templateUrl: './learn-home.component.html',
  styleUrls: ['./learn-home.component.css']
})
export class LearnHomeComponent implements OnInit {
  public imagesUrl;
   
  constructor() { }

  ngOnInit() {
    this.imagesUrl = ['assets/trainingImages/001.jpg', 'assets/trainingImages/002.jpg', 'assets/trainingImages/003.jpg',
    'assets/trainingImages/001.jpg', 'assets/trainingImages/002.jpg', 'assets/trainingImages/003.jpg'];
  }
  
 
/*
  imageObject: Array<object> = [{
    image: 'https://i.picsum.photos/id/580/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/580/400/350.jpg',
    alt: 'alt of image',
    title: 'title of image',
 
  }, {
    image: 'https://i.picsum.photos/id/838/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/838/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt',
 
  }, {
    image: 'https://i.picsum.photos/id/93/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/93/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt',
    animationSpeed: 0.1,
    infinite : true
  }, {
    image: 'https://i.picsum.photos/id/543/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/543/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt',
 
  }, {
    image: 'https://i.picsum.photos/id/613/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/613/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt',
 
  }, {
    image: 'https://i.picsum.photos/id/609/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt',
 
  }, {
    image: 'https://i.picsum.photos/id/717/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/717/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt',
 
  }
  ];


*/
  

}

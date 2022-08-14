import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let elems: any = document.querySelector('#imgList');
    let totalHeight: any = Array.from(elems.children).reduce(
      (pv: any, cv: any) => pv + cv.offsetHeight,
      0
    );

    //
    const r = document.querySelector('#fakeScroll') as any;
    r.style.height = totalHeight + 'px';
    //

    window.onscroll = function () {
      const movingScroll = document.documentElement.scrollTop;
      Array.from(elems.children).map((elem: any) => {
        let els: any = document.querySelector('.' + elem.id);
        if (
          movingScroll > r.offsetTop + elem.offsetTop - elem.offsetHeight &&
          movingScroll < r.offsetTop + elem.offsetTop + elem.offsetHeight / 4
        ) {
          els.style.color = 'red';
          els.style.fontWeight = 'bold';
        } else {
          els.style.color = 'black';
          els.style.fontWeight = '400';
        }
      });
    };
  }

  onSwiper([swiper]: any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import * as AOS from 'aos';
import {NgxGlideComponent} from "ngx-glide";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @ViewChild(NgxGlideComponent, { static: false }) ngxGlide!: NgxGlideComponent;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}

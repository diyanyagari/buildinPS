(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+XSj":function(e,t){e.exports="<p>\r\n  Page Not Found !\r\n</p>\r\n"},"0pgs":function(e,t,a){"use strict";a.r(t);var n,r=a("ou6Q"),o=a("CcnG"),i=a("A7o+"),s=a("AytR"),l=a("gIcY"),c=a("Ozuo"),d=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),u=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e){function t(t,a,n){var r=e.call(this,t)||this;return r.translate=t,r.fb=a,r.alertService=n,r.data=[],r.item={alamat:{}},r.modulaplikasi=[],r.isLoading=!1,r}return d(t,e),t.prototype.ngOnInit=function(){window.scroll(0,0),this.user={},this.form=this.fb.group({nama:new l.FormControl("",l.Validators.required),email:new l.FormControl("",l.Validators.required),modulaplikasi:new l.FormControl("",l.Validators.required),subjek:new l.FormControl("",l.Validators.required),message:new l.FormControl("",l.Validators.required)})},t.prototype.onChangeModulAplikasi=function(e){this.user.modulaplikasi=e,console.log(e)},t.prototype.ngAfterViewInit=function(){var e=this;this.registerTranslate("kami");var t=s.a.BASE_URL;this.getAxios().get(t+"admin/ModulAplikasi").then(function(t){e.data=t.data}).catch(function(e){return console.log(e)}),this.isLoading=!1,this.getAxios().get(t+"Menu/Profile").then(function(t){e.item=t.data,e.isLoading=!0}).catch(function(e){return console.log(e)}),void 0!==window.localStorage.getItem("token")&&null!==window.localStorage.getItem("token")&&this.getAxios().get(t+"Authentication",{headers:{Authorization:window.localStorage.getItem("token")}}).then(function(e){}).catch(function(e){return console.log(e)})},t.prototype.onSubmit=function(){console.log(this.form.value.nama),console.log(this.form.value.email),console.log(this.form.value.modulaplikasi),console.log(this.form.value.subjek),this.alertService.success("Pengiriman Pesan Berhasil"),this.alertService.danger("Pengiriman Pesan Gagal")},t=u([Object(o.Component)({selector:"app-hubungi",template:a("KmgB"),styles:[a("eefY")]}),p("design:paramtypes",[i.d,l.FormBuilder,c.b])],t)}(r.a),f=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),v=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e){function t(t){var a=e.call(this,t)||this;return a.translate=t,a}return f(t,e),t.prototype.ngAfterViewInit=function(){this.registerTranslate("kami")},t.prototype.ngOnInit=function(){},t=v([Object(o.Component)({selector:"app-index",template:a("+XSj"),styles:[a("Dv2C")]}),g("design:paramtypes",[i.d])],t)}(r.a),b=a("QYs8"),y=a("Ip0R"),k=a("vDqi"),w=a.n(k),x=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),j=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(e){function t(t){var a=e.call(this,t)||this;return a.translate=t,a.data=[],a.isLoading=!1,a.aboutus=[],a.alamat=[],a.AddStyle("assets/js/vendor/owl.carousel.css",void 0),a.AddStyle("assets/css/bootstrap.min.css",void 0),a}return x(t,e),t.prototype.ngAfterViewInit=function(){this.registerTranslate("kami"),this.LoadData()},t.prototype.LoadOwlScript=function(){this.AddScript("assets/js/vendor/owl.carousel.min.js",function(){$(".team-carousel").owlCarousel({loop:!0,items:4,autoplay:!0,dots:!1,margin:30,nav:!0,smartSpeed:800,autoplayHoverPause:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},480:{items:1},768:{items:2},1050:{items:4}}})})},t.prototype.ngOnInit=function(){this.aboutus=[],this.getAboutUs(),this.isLoading=!1},t.prototype.getAboutUs=function(){var e=this,t=s.a.BASE_URL;w.a.get(t+"Profile/AboutUs").then(function(t){e.aboutus=t.data,e.alamat=t.data.alamat,e.isLoading=!0,console.log(e.aboutus)}).catch(function(e){return console.log(e)})},t.prototype.LoadData=function(){var e=this,t=s.a.BASE_URL;w.a.get(t+"Profile/AboutUs").then(function(t){e.data=t.data.items,e.isLoading=!0,setTimeout(function(){e.LoadOwlScript()})}).catch(function(e){return console.log(e)})},t=j([Object(o.Component)({selector:"app-tentang",template:a("6VC5"),styles:[a("Qsnb")]}),O("design:paramtypes",[i.d])],t)}(r.a),R=a("ZYCi"),A=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},_=[{path:"",component:h},{path:"tentang",component:P},{path:"hubungi",component:m}],q=function(){function e(){}return e=A([Object(o.NgModule)({exports:[R.RouterModule],imports:[R.RouterModule.forChild(_)]})],e)}();a.d(t,"KamiModule",function(){return C});var L=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},C=function(){function e(){}return e=L([Object(o.NgModule)({imports:[y.CommonModule,q,b.a,l.FormsModule,l.ReactiveFormsModule],declarations:[h,P,m]})],e)}()},"6VC5":function(e,t){e.exports='<section id="about" class="page-sec-head padding-top">\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="col-md-offset-1  col-md-10 text-center">\r\n        <h1>Tentang Bottis</h1>\r\n        \x3c!-- <p>Bottis adalah Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\r\n          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\r\n          esse cillum dolore eu fugiat nulla pariatur.</p> --\x3e\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<app-loading *ngIf="isLoading===false"></app-loading>\r\n<section class="team pt0" *ngIf="isLoading!==false">\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="col-xs-12 col-sm-12">\r\n        <div class="about">\r\n          <div class="col-md-6">\r\n            <div class="address">\r\n              <p>{{aboutus.namaLengkap}}</p>\r\n              <p><i class="fa fa-map-marker"></i>Alamat Lengkap : {{alamat.alamatLengkap}}</p>\r\n              <p><i class="fa fa-phone"></i>No Telepon : {{alamat.fixedPhone1}}</p>\r\n              <p><i class="fa fa-envelope"></i>Email : {{alamat.alamatEmail}}</p>\r\n              <p><i class="fa fa-link"></i><a target="_blank" href="http://{{alamat.website}}"></a>Website :\r\n                {{alamat.website}}</p>\r\n            </div>\r\n          </div>\r\n          \x3c!-- <h4>{{aboutus.namaLengkap}}</h4>\r\n          <p>{{alamat.alamatLengkap}}</p> --\x3e\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\x3c!-- <section class="team pt0">\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="col-xs-12 col-sm-12">\r\n        <div class="team-carousel control-two">\r\n          <div class="team-mate" *ngFor="let item of data">\r\n            <figure class="member-thumb">\r\n              <img src="assets/images/tim-male.jpg" alt="team member" class="img-responsive">\r\n              <figcaption class="mask">\r\n                <ul>\r\n                  <li><a [href]="item.alamat.twitter"><i class="fa fa-twitter"></i></a></li>\r\n                  <li><a [href]="\'/\'"><i class="fa fa-instagram"></i></a></li>\r\n                  <li><a [href]="item.alamat.facebook"><i class="fa fa-facebook"></i></a></li>\r\n                  <li><a [href]="\'/\'"><i class="fa fa-behance"></i></a></li>\r\n                </ul>\r\n              </figcaption>\r\n            </figure>\r\n          </div> \r\n          \r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section> --\x3e\r\n\r\n<div class="container"><span class="border"></span></div>\r\n\x3c!-- <section id="about" class="team-skill padding-top">\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="col-md-6">\r\n        <h4>Tentang Kami</h4>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\r\n          dolore magna aliqua.</p>\r\n        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n          laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\r\n          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>\r\n      </div>\r\n      <div class="col-md-6">\r\n        <div class="skill-name">Web Apps Cloud Development <span>95%</span></div>\r\n        <div class="progress">\r\n          <div class="progress-bar" role="progressbar" data-transitiongoal="95"></div>\r\n        </div>\r\n        <div class="skill-name">Web Profile Development <span>75%</span></div>\r\n        <div class="progress">\r\n          <div class="progress-bar" role="progressbar" data-transitiongoal="75"></div>\r\n        </div>\r\n        <div class="skill-name">Desktop Development <span>80%</span></div>\r\n        <div class="progress">\r\n          <div class="progress-bar" role="progressbar" data-transitiongoal="80"></div>\r\n        </div>\r\n        <div class="skill-name">Android / iOS Development <span>90%</span></div>\r\n        <div class="progress">\r\n          <div class="progress-bar" role="progressbar" data-transitiongoal="90"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section> --\x3e'},Dv2C:function(e,t){e.exports=""},KmgB:function(e,t){e.exports='<section id="about" class="contact page-sec-head padding-top">\r\n  \x3c!-- contact --\x3e\r\n  <div class="container">\r\n    <div class="row contact-page">\r\n      <div class="col-md-offset-1  col-md-10 text-center">\r\n        <h1>Hubungi Kami</h1>\r\n        <p>Bottis adalah Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\r\n          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\r\n          esse cillum dolore eu fugiat nulla pariatur.</p>\r\n      </div>\r\n      \x3c!--\r\n      <div class="col-md-12">\r\n        <div id="map-canvas"></div>\r\n      </div>\r\n      --\x3e\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="col-md-9 item_left">\r\n        <form [formGroup]="form" id="contact-form" class="row contact-form">\r\n          <div class="col-md-6">\r\n            <input type="text" formControlName="nama" placeholder="Nama" required class="form-control">\r\n          </div>\r\n          <div class="col-md-6">\r\n            <input type="email" formControlName="email" placeholder="Email" required class="form-control">\r\n          </div>\r\n          <div class="col-md-6">\r\n            <select required class="form-control" (change)="onChangeModulAplikasi($event.target.value)"\r\n              formControlName="modulaplikasi">\r\n              <option value="" selected>Pilih Jenis Produk </option>\r\n              <option *ngFor="let item of data" value="{{item.kdModulAplikasi}}">{{item.modulAplikasi}}</option>\r\n            </select>\r\n          </div>\r\n          <div class="col-md-6">\r\n            <input type="text" formControlName="subjek" placeholder="Subjek" required class="form-control">\r\n          </div>\r\n          <div class="col-md-12">\r\n            <textarea formControlName="message" class="form-control" required\r\n              placeholder="Tulis pertanyaan anda disini..."></textarea>\r\n            <button [disabled]="!form.valid" (click)="onSubmit()" class="btn btn-medifirst2000">Kirim Pesan</button>\r\n          </div>\r\n        </form>\r\n        <div id="success">\r\n          <p>Pesan terkirim! Kami akan membalas pesan anda secepatnya.</p>\r\n        </div>\r\n        <div id="error">\r\n          <p>Terjadi kesalahan, coba kirim pesan sekali lagi.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="col-md-3 item_right">\r\n        <div class="address">\r\n          <app-loading *ngIf="isLoading===false"></app-loading>\r\n\r\n          <h5>{{\'Lokasi Kantor\'|translate}}</h5>\r\n          <p><i class="fa fa-map-marker"></i>{{item.alamat.alamatLengkap}}</p>\r\n          <p><i class="fa fa-phone"></i>{{\'Telepon\'}}: {{item.alamat.fixedPhone1}}</p>\r\n          <p><i class="fa fa-envelope"></i><a\r\n              [href]="\'mailto:\'+item.alamat.alamatEmail">{{item.alamat.alamatEmail}}</a></p>\r\n          <p><i class="fa fa-link"></i><a [href]="item.alamat.website" target="_blank">{{item.alamat?.website}}</a></p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n'},Qsnb:function(e,t){e.exports=""},eefY:function(e,t){e.exports=""}}]);
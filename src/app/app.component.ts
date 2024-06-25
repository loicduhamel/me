import { Component, OnInit } from '@angular/core';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { PreloadService } from 'src/app/services/preloadService';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInRightOnEnterAnimation(),
  ]
})
export class AppComponent implements OnInit {
  title = 'loicduhamel';
  language = 'en';
  isLoading = true;

  constructor(private preloadService: PreloadService, public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.preloadService.preloadAssets().then(() => {
      this.isLoading = false;
    });
  }

  toHome() {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }

  toAboutMe() {
    document.getElementById("aboutme")?.scrollIntoView({behavior:"smooth"});
  }

  toExperience() {
    document.getElementById("experience")?.scrollIntoView({behavior:"smooth"});
  }

  toEducation() {
    document.getElementById("education")?.scrollIntoView({behavior:"smooth"});
  }

  toSkill() {
    document.getElementById("skill")?.scrollIntoView({behavior:"smooth"});
  }

  toFormation() {
    document.getElementById("formation")?.scrollIntoView({ behavior: "smooth" });
  }

  toHobbie() {
    document.getElementById("hobbie")?.scrollIntoView({behavior:"smooth"});
  }

  toContact() {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }

  downloadCV(){
    let link = document.createElement("a");
    link.download = "cv_loic_duhamel";

    if (this.language == "en") {
      link.href = "assets/document/cv_loic_duhamel_en.pdf";
    } else {
      link.href = "assets/document/cv_loic_duhamel_fr.pdf";
    }
    link.click();
  }

  changeLanguage() {
    this.language = this.language === 'en' ? 'fr' : 'en';
    this.translate.use(this.language);
  }
}

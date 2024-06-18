import { Component, OnInit } from '@angular/core';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { PreloadService } from 'src/app/services/preloadService';

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
  language = 'english';
  isLoading = true;

  constructor(private preloadService: PreloadService) {}

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
    link.href = "assets/document/cv_loic_duhamel.pdf";
    link.click();
  }

  changeLanguage() {
    this.language = this.language === 'english' ? 'french' : 'english';
  }
}

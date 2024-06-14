import { Component } from '@angular/core';
import { fadeInRightOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInRightOnEnterAnimation(),
  ]
})
export class AppComponent {
  title = 'loicduhamel';
  language = 'english';

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
    // @ts-ignore
    document.getElementById("formation").scrollIntoView({behavior:"smooth"});
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
    if (this.language === "english") {
      this.language = "french"
    } else {
      this.language = "english"
    }
  }
}

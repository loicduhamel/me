import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loicduhamel';
  showFiller = false;

  toHome() {
    // @ts-ignore
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
  }

  toAboutMe() {
    // @ts-ignore
    document.getElementById("aboutme").scrollIntoView({behavior:"smooth"});
  }

  toExperience() {
    // @ts-ignore
    document.getElementById("experience").scrollIntoView({behavior:"smooth"});
  }

  toEducation() {
    // @ts-ignore
    document.getElementById("education").scrollIntoView({behavior:"smooth"});
  }

  toSkill() {
    // @ts-ignore
    document.getElementById("skill").scrollIntoView({behavior:"smooth"});
  }

  toCertification() {
    // @ts-ignore
    document.getElementById("certification").scrollIntoView({behavior:"smooth"});
  }

  toHobbies() {
    // @ts-ignore
    document.getElementById("hobbies").scrollIntoView({behavior:"smooth"});
  }

  toContact() {
    // @ts-ignore
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }

}

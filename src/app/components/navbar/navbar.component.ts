import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigation = [
    {link: 'home', icon: 'home', label: 'Home'},
    {link: 'about',icon: 'emoji_emotions',  label: 'About Me'},
    {link: 'blog', icon: 'forum', label: 'Blog'},
    {link: 'people', icon: 'person_add', label: 'People'},
    {link: 'change-log', icon: 'edit', label: 'Change Log'},
    {link: 'recommendations', icon: 'add_comment', label: 'Recommendations'}
  ]

}

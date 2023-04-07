import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  items: any = [
    {
      label: 'Home',
    },
    {
      label: 'Neural Networks',
      items: [
        {
          label: 'Linear Networks',
        },
        {
          label: 'Convolutional Networks',
        }
      ]
    },
    {
      label: 'Reinforcement Learning',
      items: [
        {
          label: 'Reinforcement Learning Basics',
        },
        {
          label: 'Deep Reinforcement Learning',
        }
      ]
    },
  ];
}

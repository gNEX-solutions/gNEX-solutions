import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


// Basic
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({  position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          'z-index':0,
          // background:'#e02500',
          top:0,
          left:0,
          width: '100vw',
        })
      ]),
      query(':enter', [
        style({
          position: 'absolute',
          'z-index':0,
          // background:'#e02500',
          top: 0,
          left: '-100vw',
          width: '100vw',
        })
      ]),
      // query(':leave', animateChild()),
     
        query(':leave', [
          animate('300ms ease-out', style({ left: '100vw'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0vw'}))
        ])
      
      // query(':enter', animateChild()),
    ]),
    // transition('* <=> AboutPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       'z-index':0,
    //       background:'#eb9b34',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%'})
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('300ms ease-out', style({ left: '100%'}))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%'}))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ])
  ]);

 export const fader =
  trigger('routeAnimations', [
    transition('HomePage <=> SolutionsPage', [
      query(':leave', [
        style({
          position: 'fixed',
          'z-index':'9999',
          left: 0,
          width: '100%',
          background:'#ffff',
        }),
        animate('600ms ease', style({ opacity: 0 })),
      ]),
      query(':enter', [
        style({
          position: 'fixed',
          'z-index':'9999',
          background:'#ffff',
        }),
        animate('1000ms ease', style({ opacity: 1 })),
      ])
    ]),
]); 



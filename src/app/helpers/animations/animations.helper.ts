import { trigger, animate, style, group, query, stagger, transition, keyframes, state } from '@angular/animations';

export const listObjShow = trigger('listObjShow', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('550ms', [
            animate('600ms', keyframes([
                style({ opacity: 0, transform: 'translateY(200px)' }),
                style({ opacity: .3, transform: 'translateY(100px)' }),
                style({ opacity: 1, transform: 'translateY(0)' }),

            ]))

        ]), { optional: true }),

        query(':leave', stagger('250ms', [
            animate('600ms', keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(-100px)', offset: 0.3 }),
                style({ opacity: 0, transform: 'translateY(-200px)', offset: 1 }),

            ]))
        ]), { optional: true }),
    ])
]);

export const fadeOut = trigger('fadeOut', [
    // the "in" style determines the "resting" state of the element when it is visible.
    state('in', style({opacity: 1})),
    transition(':leave',
      animate(600, style({opacity: 0})))
]);

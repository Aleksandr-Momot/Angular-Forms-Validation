import { templateJitUrl } from '@angular/compiler';
import {Component} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent{

    toggle = false;
    now: Date = new Date()
    myText = 'Hello Text'
    

}
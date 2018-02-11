import { ButtonType } from '../enums/button';
import { ButtonModel } from './button.model';
import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './view/button.html',
    styleUrls: ['./css/button.css']
})

export class ButtonComponent {
    private _buttonModel: ButtonModel;

    @Input() set buttonModel(model: ButtonModel) {
        this._buttonModel = model;
    }

    get buttonModel(): ButtonModel {
        return this._buttonModel;
    }

    @HostListener('click') onmousedown() {
        if (this._buttonModel.getEnabled()) {
            this._buttonModel.runAction();
        }
    }
}

import { ButtonType } from '../enums/button';

export class ButtonModel {
    private text: string;
    private type: ButtonType;
    private enabled: boolean;
    private handler: () => void;

    constructor(text: string, type: ButtonType, handler: () => void) {
        this.text = text;
        this.type = type;
        this.handler = handler;
        this.enabled = true;
    }

    public setText(text: string): void {
        this.text = text;
    }

    public getText(): string {
        return this.text;
    }

    public getType(): ButtonType {
        return this.type;
    }

    public setHandler(handler: () => void): void {
        this.handler = handler;
    }

    public setEnabled(enabled: boolean): void {
        this.enabled = enabled;
    }

    public getEnabled(): boolean {
        return this.enabled;
    }

    public runAction(): void {
        this.handler();
    }
}

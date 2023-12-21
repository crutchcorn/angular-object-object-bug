import "zone.js";
import { bootstrapApplication } from "@angular/platform-browser";

import { Component, Input } from "@angular/core";

@Component({
	selector: "display-size",
	standalone: true,
	template: `<p>Test</p>`,
})
class DisplaySizeComponent {
	@Input() bytes!: number;
}

@Component({
	selector: "app-root",
	standalone: true,
	imports: [DisplaySizeComponent],
	template: `
		<display-size [bytes]="123" />
	`,
})
export class AppComponent {}

bootstrapApplication(AppComponent);

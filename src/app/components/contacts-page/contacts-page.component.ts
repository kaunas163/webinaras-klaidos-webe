import { Component } from '@angular/core';

@Component({
    selector: 'app-contacts-page',
    standalone: true,
    imports: [],
    templateUrl: './contacts-page.component.html',
    styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent {

    isError = false

    onFormSubmit(event: any) {
        event.preventDefault()
        this.isError = true
    }

}

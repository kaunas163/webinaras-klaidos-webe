import { Component } from '@angular/core';
import { CompanyServicesService } from '../../services/company-services.service';
import { CompanyServices } from '../../models/company-services.model';

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [],
    templateUrl: './services-page.component.html',
    styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {

    companyServices: CompanyServices[] = []

    constructor(
        private companyServicesService: CompanyServicesService,
    ) {}

    ngOnInit() {
        this.companyServices = this.companyServicesService.getCompanyServices()
    }

}

import { Component } from '@angular/core';
import { CompanyServicesService } from '../../services/company-services.service';
import { CompanyServices } from '../../models/company-services.model';
import { RouterModule } from '@angular/router';
import { Testimonial } from '../../models/testimonial.model';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        RouterModule,
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

    companyServices: CompanyServices[] = []

    testimonials: Testimonial[] = []

    constructor(
        private companyServicesService: CompanyServicesService,
        private testimonialsService: TestimonialsService,
    ) {}

    ngOnInit() {
        this.companyServices = this.companyServicesService.getCompanyServices()
        this.testimonials = this.testimonialsService.getTestimonials()
        console.error('O ne! Kažkur klaida!')
    }

}

import { Injectable } from '@angular/core';
import { CompanyServices } from '../models/company-services.model';

@Injectable({
    providedIn: 'root'
})
export class CompanyServicesService {

    companyServices: CompanyServices[] = [
        {
            slug: 'poliai-grezimas',
            title: 'Polių gręžimas',
            picture: 'cfa.jpg',
            shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat ut eveniet quibusdam temporibus harum.',
        },
        {
            slug: 'pamatu-betonavimas',
            title: 'Pamatų betonavimas',
            picture: 'pamatai.png',
            shortDescription: 'Quas deserunt voluptatum similique dignissimos quia consequatur tempora ipsa, magni nihil sed mollitia quam numquam.',
        },
        {
            slug: 'grindu-irengimas',
            title: 'Grindų įrengimas',
            picture: 'grindys.jpg',
            shortDescription: 'Facilis corporis debitis perspiciatis explicabo doloremque veritatis magnam, libero atque fugiat tempore alias maiores totam.',
        },
    ]

    constructor() { }

    getCompanyServices(limit: number = -1) {
        if (limit == -1) {
            return this.companyServices
        }
        return this.companyServices.slice(0, limit)
    }
}

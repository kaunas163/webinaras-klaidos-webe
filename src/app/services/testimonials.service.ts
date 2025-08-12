import { Injectable } from '@angular/core';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

    testimonials: Testimonial[] = [
        {
            picture: 'https://i.pravatar.cc/500?img=3',
            name: 'Jonas Jonauskas',
            text: 'Labai faina chebrybė - profesonaliai pakonsultavo dėl reikiamų žingsnių viską įsirengti, greitai atvarė, greitai padarė darbus, viskas kokybiškai, o po savęs dar ir susitvarkė.',
            date: '2024-08-09',
        },
        {
            picture: 'https://i.pravatar.cc/500?img=8',
            name: 'Ignas Ignauskas',
            text: 'Man reikėjo pamatų betonavimo, viskas puikiai.',
            date: '2024-10-15',
        },
        {
            picture: 'https://i.pravatar.cc/500?img=5',
            name: 'Gabrielė Gabrielytė',
            text: 'Kai reikėjo pradėti gręžti polius ir pradėti statytis namus, deja su draugu buvom išvykę, tačiau pasitaikė šie nuostabūs vyrukai, kurie puikiai patys be priežiūros padarė visus darbus, grįžę iš atostogų buvom labai maloniai nustebinti.',
            date: '2025-02-16',
        },
    ]

    constructor() { }

    getTestimonials() {
        return this.testimonials
    }
}

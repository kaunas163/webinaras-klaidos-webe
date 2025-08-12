import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-checklist',
    standalone: true,
    imports: [
        RouterModule,
    ],
    templateUrl: './checklist.component.html',
    styleUrl: './checklist.component.scss'
})
export class ChecklistComponent {
    isModalOpen = false

    checks: any[] = [
        { title: 'Ar aišku koks tinklalapio tikslas? Koks yra paslaugos tiekėjas? Ką jis siūlo pirkti / gauti?' },
        { title: 'Ar visur yra geras teksto skaitomumas / matomumas (angl. readability)?' },
        { title: 'Ar visur yra suvienodinta tekstų ir informacinių pranešimų kalba? Pvz, jei tinklalapis lietuvos rinkai - tai visur tekstai pilnai lietuviški turi būti' },
        { title: 'Ar vartotojai gali susirasti informaciją, atlikti savo norimas užduotis?' },
        { title: 'Ar nėra paliktų vietų be tikros informacijos? Pvz lorem ipsum tekstai' },
        { title: 'Ar sudėti tinkami antraščių lygiai?' },
        { title: 'Ar bendrai tekstai ir kiti elementai yra sulygiuoti gerai?' },
        { title: 'Ar visos nuorodos vaikštant tarp puslapių veikia?' },
        { title: 'Ar visur kur yra vartotojo veiksmas (paspaudimas, užvedimas pele ir pan.) yra kokių vizualių identifikatorių? Pvz, pasikeičia elemento spalva, jis pajuda.' },
        { title: 'Ar visos animacijos veikia greitai? Mygtukams geriausia 0.2s - 0.3s, kai kuriems kitiems elementams ne daugiau nei 0.4s, o jei trunka ilgiau - žmogui gali atrodyti, kad "lagina".' },
        { title: 'Ar visi paspaudžiami mygtukai kažką daro?' },
        { title: 'Ar pritaikyta mažesniems ekranas, pvz telefonui?' },
        { title: 'Ar bendrai viskas užsikrauna sąlyginai greitai? Geriausia iki 1-2 s., "iš bėdos" apie 3-5 s., jei ilgiau - labai blogai.' },
        { title: 'Ar visos nuotraukos kraunamos tinkamo dydžio ir formato? WEBP ar iš bėdos JPG - normaliom nuotraukom, SVG ar iš bėdos PNG - ikonom' },
        { title: 'Ar sukėlus skirtingų rezoliucijų nuotraukas tinklalapio vaizdas nesugriūna? Ar nenusikerpa / neišsikraipo esminės nuotraukų dalys, pvz žmonių veidai?' },
        { title: 'Ar veikia kontaktinės arba kitokios formos?' },
        { title: 'Ar eina spausti ant kontaktinės informacijos, pvz ant telefono numerio, kad skambinti ir el. pašto, kad rašyti laišką?' },
        { title: 'Ar nėra programinių klaidų? Arba klaidų pranešimų ne vietoje?' },
        { title: 'Ar eina tekste suprasti kur yra nuorodos?' },
        { title: 'Ar visur paspaudimo zonos geros? Kuo didesnė paspaudimo zona - tuo lengviau lankytojui.' },
        { title: 'Ar tinklalapis kur nors kviečia atlikti kokį nors veiksmą? CTA - Call To Action.' },
    ]

    ngOnInit() {
        for (let i = 0; i < this.checks.length; i++) {
            this.checks[i].id = i + 1
        }
    }
}

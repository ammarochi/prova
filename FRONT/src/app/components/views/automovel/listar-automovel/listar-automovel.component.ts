import { Automovel } from 'src/app/models/automovel';
import { Component, OnInit } from '@angular/core';
import { AutomovelService } from 'src/app/services/automovel.service';

@Component({
    selector: 'app-listar-automovel',
    templateUrl: './listar-automovel.component.html',
    styleUrls: ['./listar-automovel.component.css']
})
export class ListarAutomovelComponent implements OnInit {

    automoveis: Automovel[] = [];

    constructor(private service: AutomovelService) { }

    ngOnInit(): void {
        this.service.list().subscribe((automoveis) => {
            this.automoveis = automoveis;
        })
    }

}

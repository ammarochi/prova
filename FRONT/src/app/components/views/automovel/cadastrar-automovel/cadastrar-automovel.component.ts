import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automovel } from 'src/app/models/automovel';
import { AutomovelService } from 'src/app/services/automovel.service';

@Component({
    selector: 'app-cadastar-automovel',
    templateUrl: './cadastrar-automovel.component.html',
    styleUrls: ['./cadastrar-automovel.component.css']
})
export class CadastrarAutomovelComponent implements OnInit {

    modelo!: string;
    placa!: string;
    proprietario!: string;
    cor!: string;
    cpfproprietario!: string;

    constructor(private service: AutomovelService, private router: Router) { }

    ngOnInit(): void {}

    create(): void{
        let automovel: Automovel = {
            modelo: this.modelo,
            placa: this.placa,
            proprietario: this.proprietario,
            cor: this.cor,
            cpfproprietario : this.cpfproprietario,
        }
        this.service.create(automovel).subscribe((automovel) => {
            this.router.navigate(["automovel/listar"])
        })
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
    selector: 'app-cadastar-produto',
    templateUrl: './cadastrar-produto.component.html',
    styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

    nome!: string;
    descricao!: string;
    preco!: number;
    categoria!: string;
    cor!: string;

    constructor(private service: ProdutoService, private router: Router) { }

    ngOnInit(): void {}

    create(): void{
        let produto: Produto = {
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
            categoria: this.categoria,
            cor: this.cor
        }
        this.service.create(produto).subscribe((produto) => {
            this.router.navigate(["produto/listar"])
        })
    }

}

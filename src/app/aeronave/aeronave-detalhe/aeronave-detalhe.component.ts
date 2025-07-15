import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AeronaveService, Aeronave } from '../../services/aeronave.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aeronave-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aeronave-detalhe.component.html',
  styleUrl: './aeronave-detalhe.component.css'
})
export class AeronaveDetalheComponent implements OnInit {
  aeronave: Aeronave | null = null;


  constructor(
    private route: ActivatedRoute,
    private aeronaveService: AeronaveService
  ) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if (id) {
      this.aeronaveService.getAeronaveById(id).subscribe({
        next: (res: any) => {
          this.aeronave = res.aeronaveResult; // ✅ unwrap here
        },
        error: err => {
          console.error('Erro ao buscar detalhes do aeroporto:', err);
        }
      });
    }
  });
  }
}
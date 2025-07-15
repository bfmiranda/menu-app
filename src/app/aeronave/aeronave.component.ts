import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeronaveService, Aeronave } from '../services/aeronave.service';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-aeronave',
  standalone: true,
  imports: [CommonModule,RouterModule,MatCardModule],
  templateUrl: './aeronave.component.html',
  styleUrl: './aeronave.component.css'
})
export class AeronaveComponent implements OnInit {
  aeronaves: Aeronave[] = [];
  loading = true;
   
error: string | null = null;
  
  constructor(private aeronaveService: AeronaveService) {}

  ngOnInit(): void {
    this.aeronaveService.getAeronaves().subscribe({
      next: (data: Aeronave[]) => {
        this.aeronaves = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching aeronaves:', err);
        this.error = 'Failed to load aeronaves';
        this.loading = false;
      }
    })
  }

}

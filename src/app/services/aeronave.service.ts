import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Aeronave {
  _id: string;
  matricula: string;
  cpf_cnpj: string;
  tipo_aeronave: string;
  nome_razao_social: string;
  cidade_estado: string;
  ufoperador: string;
  cpf_cgc: string;
  fone_resp: string;
  email_financeiro: string

}

@Injectable({
  providedIn: 'root'
})

export class AeronaveService {
private apiUrl = 'https://rest-api-aero.vercel.app/api/aeronaves';
private apiUrlById = 'https://rest-api-aero.vercel.app/api/aeronave';

constructor(private http: HttpClient) {}

  getAeronaves(): Observable<Aeronave[]> {
    return this.http.get<Aeronave[]>(this.apiUrl);
  }

  getAeronaveById(id: string): Observable<Aeronave> {
    return this.http.get<Aeronave>(`${this.apiUrlById}/${id}`);
  }
}

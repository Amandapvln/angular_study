import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, TarefaConcluidaDirective } from './shared';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListarTarefaComponent } from './shared';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations:[
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }

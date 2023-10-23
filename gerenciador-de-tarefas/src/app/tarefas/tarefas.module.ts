import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
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
    EditarTarefaComponent
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }

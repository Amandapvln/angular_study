import { TarefaConcluidaDirective } from './tarefa-concluida.directive';
import { ElementRef } from '@angular/core';

describe('TarefaConcluidaDirective', () => {
  it('should create an instance', () => {
    const elMock = new ElementRef(null); // Crie uma instância de ElementRef simulada
    const directive = new TarefaConcluidaDirective(elMock);
    expect(directive).toBeTruthy();
  });
});

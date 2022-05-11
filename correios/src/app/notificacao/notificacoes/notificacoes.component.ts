import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import { DialogData } from 'src/app/shared/models/dialog-data.model';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.scss']
})
export class NotificacoesComponent implements OnInit {

  public dialogData: DialogData={pedido: 'Macbook para Monitor', estado: 'Pernambuco'};  

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: this.dialogData
    });
  }
  ngOnInit(): void {
  }

}


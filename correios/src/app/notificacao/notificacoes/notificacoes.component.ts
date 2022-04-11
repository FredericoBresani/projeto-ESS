import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.scss']
})
export class NotificacoesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogElements);
  }
  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-elements',
  templateUrl: 'notificacoes.dialog.html',
})
export class DialogElements {}
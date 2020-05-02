import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slab',
  templateUrl: './slab.component.html',
  styleUrls: ['./slab.component.scss']
})
export class SlabComponent implements OnInit {

  @Output('onSlabToggle') tumbleToStorey = new EventEmitter()

  payload = {
    buryInscription: 'Скрываемая надпись',
    evinceNotice: 'Отображаемое уведомление',
    lurked: false
  }

  positiveNotificFromSlab = 'Отображено в третьем потомке'
  negativeNotificFromSlab = 'Скрыто в третьем потомке'

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.payload.lurked = !this.payload.lurked
    this.tumbleToStorey.emit(this.payload)
  }

}

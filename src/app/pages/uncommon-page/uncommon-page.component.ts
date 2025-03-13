import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Farney',
  age: 42,
  gender: 'male',
  address: 'Parcelación La María, El Retiro, Antioquia, Colombia'
}

const client2 = {
  name: 'Melissa',
  age: 33,
  gender: 'female',
  address: 'Toronto, Canada'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    AsyncPipe,
    CardComponent,
    I18nPluralPipe,
    I18nSelectPipe,
    JsonPipe,
    KeyValuePipe,
    SlicePipe,
    TitleCasePipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18nSelect Pipe
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    // Condición ternaria que cambia el cliente actual entre client1 y client2
    console.log(this.client());

    this.client() === client1 ? this.client.set(client2) : this.client.set(client1);
    this.client.set(client1);
  }

  // i18nPlural Pipe

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'un cliente esperando.',
    '=2': '2 clientes esperando.',
    other: '# clientes esperando.',
  })
  clients = signal([
    'María',
    'Juan',
    'Pedro',
    'Luis',
    'Ana',
    'Sofía',
    'Carlos',
    'Mónica',
    'Andrés',
    'Camila'
  ]);

  removeClient() {
    // Elimina el último cliente en la lista
    this.clients.update(clients => clients.slice(0, -1));
  }

  // keyValue Pipe
  profile = {
    name: 'Fernando',
    age: 39,
    address: 'Ottawa, Canada',
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('¡Tenemos data en la promesa!');
      // reject('¡Tenemos un error en la data!');
      console.log('¡Promesa resuelta!');
    },2000);
  });

  // Async Pipe with Observables
  myObservableTimer = interval(1500).pipe(
    map((value) => value + 1),
    tap((value) => console.log('Tap:', value))
  )
}

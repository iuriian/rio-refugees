import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() {}

  public countries = [
     {
      id: 5,
      name: 'Português',
      type: 'pt-BR',
      flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/br.svg',
    },
    {
      id: 24,
      name: 'English',
      type: 'en',
      flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/us.svg',
    },
     {
      id: 32,
      name: 'Francais',
      type: 'fr-be',
      flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg',
    }, {
      id: 8,
      name: 'Deutsche',
      type: 'de',
      flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ge.svg',
    }, {
      id: 20,
      name: 'Spanish',
      type: 'es',
      flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/es.svg',
    }, {
      id: 32,
      name: 'عربى',
      type: 'ar-sa',
      flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ae.svg',
    }/*,
    {
    id: 0,
    name: 'Japan',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/jp.svg',
  }, {
    id: 2,
    name: 'Russia',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ru.svg',
  }, {
    id: 3,
    name: 'India',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/in.svg',
  }, {
    id: 4,
    name: 'Cayman Islands',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ky.svg',
  }, {
    id: 6,
    name: 'Egypt',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/eg.svg',

  }, {
    id: 7,
    name: 'Finland',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/fi.svg',

  }, {
    id: 9,
    name: 'Canada',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ca.svg',

  }, {
    id: 11,
    name: 'Chile',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/cl.svg',

  }, {
    id: 12,
    name: 'Argentina',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ar.svg',

  }, {
    id: 13,
    name: 'Curacao',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/cw.svg',

  }, {
    id: 14,
    name: 'Sri Lanka',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/lk.svg',

  }, {
    id: 15,
    name: 'Madagascar',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/mg.svg',

  }, {
    id: 16,
    name: 'Ireland',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ie.svg',

  }, {
    id: 17,
    name: 'Italy',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/it.svg',

  }, {
    id: 18,
    name: 'Greece',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/gr.svg',

  }, {
    id: 19,
    name: 'Malaysia',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/my.svg',

  }, {
    id: 21,
    name: 'Panama',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/pa.svg',

  }, {
    id: 22,
    name: 'China',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/cn.svg',

  }, {
    id: 23,
    name: 'Somalia',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/so.svg',

  }, {
    id: 25,
    name: 'Australia',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/au.svg',

  }, {
    id: 26,
    name: 'Philippines',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ph.svg',

  }, {
    id: 27,
    name: 'United Kingdom',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg',

  }, {
    id: 28,
    name: 'Venezuela',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ve.svg',

  }, {
    id: 29,
    name: 'Indonesia',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/id.svg',

  }, {
    id: 30,
    name: 'Thailand',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/th.svg',

  }, {
    id: 31,
    name: 'Ecuador',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/ec.svg',

  }*/];
}

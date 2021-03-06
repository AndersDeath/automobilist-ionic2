import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  constructor(public navCtrl: NavController) {
    this.items = this.getCodes();
  }
  ionViewWillEnter() {
    // console.log('Страница Поиск региона открыта');
  }

  filterItems(ev: any) {
    let val = ev.target.value;
    this.items = this.getCodes();
    if (val && val.trim() !== '') {
      if (!isNaN(parseInt(val))) {
        this.items = this.items.filter(function (item) {
          return item.code.toLowerCase().includes(val);
        });
      } else {
        this.items = this.items.filter(function (item) {
          return item.name.toLowerCase().includes(val.toLowerCase());
        });
      }
    }
  }

  getCodes() {
    var codes = [{
      'id': 1,
      'name': 'Республика Адыгея',
      'code': [1],
    }, {
      'id': 2,
      'name': 'Республика Башкортостан',
      'code': [2, 102],
    }, {
      'id': 3,
      'name': 'Республика Бурятия',
      'code': [3, 103],
    }, {
      'id': 4,
      'name': 'Республика Алтай (Горный Алтай)',
      'code': [4],
    }, {
      'id': 5,
      'name': 'Республика Дагестан',
      'code': [5],
    }, {
      'id': 6,
      'name': 'Республика Ингушетия',
      'code': [6],
    }, {
      'id': 7,
      'name': 'Кабардино-Балкарская Республика',
      'code': [7],
    }, {
      'id': 8,
      'name': 'Республика Калмыкия',
      'code': [8],
    }, {
      'id': 9,
      'name': 'Республика Карачаево-Черкессия',
      'code': [9],
    }, {
      'id': 10,
      'name': 'Республика Карелия',
      'code': [10],
    }, {
      'id': 11,
      'name': 'Республика Коми',
      'code': [11],
    }, {
      'id': 12,
      'name': 'Республика Марий Эл',
      'code': [12],
    }, {
      'id': 13,
      'name': 'Республика Мордовия',
      'code': [13, 113],
    }, {
      'id': 14,
      'name': 'Республика Саха (Якутия)',
      'code': [14],
    }, {
      'id': 15,
      'name': 'Республика Северная Осетия — Алания',
      'code': [15],
    }, {
      'id': 16,
      'name': 'Республика Татарстан',
      'code': [16, 116, 716],
    }, {
      'id': 17,
      'name': 'Республика Тыва',
      'code': [17],
    }, {
      'id': 18,
      'name': 'Удмуртская Республика',
      'code': [18],
    }, {
      'id': 19,
      'name': 'Республика Хакасия',
      'code': [19],
    }, {
      'id': 20,
      'name': 'Чувашская Республика',
      'code': [21, 121],
    }, {
      'id': 21,
      'name': 'Алтайский край',
      'code': [22],
    }, {
      'id': 22,
      'name': 'Краснодарский край',
      'code': [23, 93, 123],
    }, {
      'id': 23,
      'name': 'Красноярский край',
      'code': [24, 88, 84, 124],
    }, {
      'id': 24,
      'name': 'Приморский край',
      'code': [25, 125],
    }, {
      'id': 25,
      'name': 'Ставропольский край',
      'code': [26, 126],
    }, {
      'id': 26,
      'name': 'Хабаровский край',
      'code': [27],
    }, {
      'id': 27,
      'name': 'Амурская область',
      'code': [28],
    }, {
      'id': 28,
      'name': 'Архангельская область',
      'code': [29],
    }, {
      'id': 29,
      'name': 'Астраханская область',
      'code': [30],
    }, {
      'id': 30,
      'name': 'Белгородская область',
      'code': [31],
    }, {
      'id': 31,
      'name': 'Брянская область',
      'code': [32],
    }, {
      'id': 32,
      'name': 'Владимирская область',
      'code': [33],
    }, {
      'id': 33,
      'name': 'Волгоградская область',
      'code': [34, 134],
    }, {
      'id': 34,
      'name': 'Вологодская область',
      'code': [35],
    }, {
      'id': 35,
      'name': 'Воронежская область',
      'code': [36, 136],
    }, {
      'id': 36,
      'name': 'Ивановская область',
      'code': [37],
    }, {
      'id': 37,
      'name': 'Иркутская область',
      'code': [38, 85, 138],
    }, {
      'id': 38,
      'name': 'Калининградская область',
      'code': [39, 91],
    }, {
      'id': 39,
      'name': 'Калужская область',
      'code': [40],
    }, {
      'id': 40,
      'name': 'Камчатский край',
      'code': [41],
    }, {
      'id': 41,
      'name': 'Кемеровская область',
      'code': [42, 142],
    }, {
      'id': 42,
      'name': 'Кировская область',
      'code': [43],
    }, {
      'id': 43,
      'name': 'Костромская область',
      'code': [44],
    }, {
      'id': 44,
      'name': 'Курганская область',
      'code': [45],
    }, {
      'id': 45,
      'name': 'Курская область',
      'code': [46],
    }, {
      'id': 46,
      'name': 'Ленинградская область',
      'code': [47],
    }, {
      'id': 47,
      'name': 'Липецкая область',
      'code': [48],
    }, {
      'id': 48,
      'name': 'Магаданская область',
      'code': [49],
    }, {
      'id': 49,
      'name': 'Московская область',
      'code': [50, 90, 150, 190, 750],
    }, {
      'id': 50,
      'name': 'Мурманская область',
      'code': [51],
    }, {
      'id': 51,
      'name': 'Нижегородская область',
      'code': [52, 152],
    }, {
      'id': 52,
      'name': 'Новгородская область',
      'code': [53],
    }, {
      'id': 53,
      'name': 'Новосибирская область',
      'code': [54, 154],
    }, {
      'id': 54,
      'name': 'Омская область',
      'code': [55],
    }, {
      'id': 55,
      'name': 'Оренбургская область',
      'code': [56],
    }, {
      'id': 56,
      'name': 'Орловская область',
      'code': [57],
    }, {
      'id': 57,
      'name': 'Пензенская область',
      'code': [58],
    }, {
      'id': 58,
      'name': 'Пермский край',
      'code': [59, 81, 159],
    }, {
      'id': 59,
      'name': 'Псковская область',
      'code': [60],
    }, {
      'id': 60,
      'name': 'Ростовская область',
      'code': [61, 161],
    }, {
      'id': 61,
      'name': 'Рязанская область',
      'code': [62],
    }, {
      'id': 62,
      'name': 'Самарская область',
      'code': [63, 163],
    }, {
      'id': 63,
      'name': 'Саратовская область',
      'code': [64, 164],
    }, {
      'id': 64,
      'name': 'Сахалинская область',
      'code': [65],
    }, {
      'id': 65,
      'name': 'Свердловская область',
      'code': [66, 96, 166, 196],
    }, {
      'id': 66,
      'name': 'Смоленская область',
      'code': [67],
    }, {
      'id': 67,
      'name': 'Тамбовская область',
      'code': [68],
    }, {
      'id': 68,
      'name': 'Тверская область',
      'code': [69],
    }, {
      'id': 69,
      'name': 'Томская область',
      'code': [70],
    }, {
      'id': 70,
      'name': 'Тульская область',
      'code': [71],
    }, {
      'id': 71,
      'name': 'Тюменская область',
      'code': [72],
    }, {
      'id': 72,
      'name': 'Ульяновская область',
      'code': [73, 173],
    }, {
      'id': 73,
      'name': 'Челябинская область',
      'code': [74, 174],
    }, {
      'id': 74,
      'name': 'Забайкальский край',
      'code': [75, 80],
    }, {
      'id': 75,
      'name': 'Ярославская область',
      'code': [76],
    }, {
      'id': 76,
      'name': 'г. Москва',
      'code': [77, 97, 99, 177, 197, 199, 777, 799],
    }, {
      'id': 78,
      'name': 'г. Санкт-Петербург',
      'code': [78, 98, 178],
    }, {
      'id': 79,
      'name': 'Еврейская автономная область',
      'code': [79],
    }, {
      'id': 80,
      'name': 'Республика Крым',
      'code': [82],
    }, {
      'id': 81,
      'name': 'Ненецкий автономный округ',
      'code': [83],
    }, {
      'id': 82,
      'name': 'Ханты-Мансийский автономный округ — Югра',
      'code': [86, 186],
    }, {
      'id': 83,
      'name': 'Чукотский автономный округ',
      'code': [87],
    }, {
      'id': 84,
      'name': 'Ямало-Ненецкий автономный округ',
      'code': [89],
    }, {
      'id': 85,
      'name': 'г. Севастополь',
      'code': [92],
    }, {
      'id': 86,
      'name': 'Территории, находящиеся за пределами РФ и обслуживаемые Департаментом режимных объектов МВД России',
      'code': [94],
    }, {
      'id': 87,
      'name': 'Чеченская республика',
      'code': [95],
    }];
    let afterParse = [];
    for (let i in codes) {
      let img = 'assets/regions/';
      let x = '';
      let ext = '';
      let pngArr = [94, 72, 71, 70, 67, 63, 62, 61, 57,28];
      let jpgArr = [58];
      if (pngArr.indexOf(codes[i].code[0]) !== -1) {
        ext = '.png';
      } else if (jpgArr.indexOf(codes[i].code[0]) !== -1) {
        ext = '.jpg';
      } else {
        ext = '.svg';
      }
      if (codes[i].code[0] < 10) {
        img += '0' + codes[i].code[0] + ext;
      } else {
        img += codes[i].code[0] + ext;
      }
      for (let q in codes[i].code) {
        if (codes[i].code[q] < 10) {
          x += '0' + codes[i].code[q] + ', ';
        } else {
          x += codes[i].code[q] + ', ';
        }
      }
      x = x.substring(0, x.length - 2)
      afterParse.push({
        name: codes[i].name,
        code: x,
        img: img
      });
    }
    console.log(afterParse)
    return afterParse;
  }

}

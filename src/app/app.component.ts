import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg',
      description: 'Leão'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg',
      description: 'Leoa'
    },
    {
      url: 'https://thegamestower.files.wordpress.com/2011/01/capa-ac3a7c3a3o-games-ed-7.jpg',
      description: 'Ação Games Clube'
    },
    {
      url:"https://super.abril.com.br/wp-content/uploads/2018/07/capa_lol.jpg?quality=70&strip=info&w=720&h=930&crop=1",
      description: "Revelations"
    },
    {
      url:"https://www.selectgame.com.br/wp-content/uploads/2011/12/revista-oficial-playstation-edicao-157-capa-medio.jpg",
      description:"League of Legends"
    }
  ];
}

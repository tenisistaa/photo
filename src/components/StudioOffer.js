import React from 'react';
import '../App.css';
import { menuUp } from './functions'
import rodzinne from '../offers/rodzinne.pdf';
import brzuszkowe from '../offers/brzuszkowe.pdf';
import noworodkowe from '../offers/noworodkowe.pdf';
import dzieciece from '../offers/dzieciece.pdf';
import komercyjne from '../offers/komercyjne.pdf';
import plenerowe from '../offers/plenerowe.pdf';
import wizerunkowe from '../offers/wizerunkowe.pdf';
import komunijne from '../offers/komunijne.pdf';


export default class StudioOffer extends React.Component {

  componentDidMount() {
    menuUp("about-us-studio-offer");
  }

  render() {
    return (
      <div id="about-us-studio-offer">
        <h1 className="title">Oferta studyjna</h1>
        <div className='offersContainer'>
          <div className='offer family'>
            <a href={rodzinne}>Sesje rodzinne</a>
          </div>
          <div className='offer offer-margin-LR children'>
            <a href={dzieciece}>Sesje dziecięce</a>
          </div>
          <div className='offer offer-margin-R professional'>
            <a href={wizerunkowe}>Sesje wizerunkowe</a>
          </div>
          <div className='offer baby'>
            <a href={noworodkowe}>Sesje noworodkowe</a>
          </div>
          <div className='offer openAir'>
            <a href={plenerowe}>Sesje plenerowe</a>
          </div>
          <div className='offer offer-margin-LR tummy'>
            <a href={brzuszkowe}>Sesje brzuszkowe</a>
          </div>
          <div className='offer offer-margin-R communion'>
            <a href={komunijne}>Sesje komunijne</a>
          </div>
          <div className='offer commercial'>
            <a href={komercyjne}>Sesje komercyjne</a>
          </div>
        </div>
        <div className='descriptionOfferContainer'>
          <div className='descriptionOffer'>
            <div className='studioAll'>
              <img className='firstAllPhoto'
                src='/gallery/studioAll1Big.jpg' alt='studio' width='100%'
              ></img>
              <img 
                src='/gallery/studioAll2Big.jpg' alt='studio' width='100%'
              ></img>
            </div>
            <div className='textsAll'>
              <p>
                Jeżeli szukasz fotografa, który "na szybko pstryknie" <br />
                parę fotek, prawdopodobnie źle trafiłeś <i className="material-icons"> mood </i>
              </p>
              <p>
                Z "marszu" można zrobić zdjęcie do dowodu <i className="material-icons"> mood </i>
              </p>
              <p>
                Do każdej innej sesji trzeba się przygotować. <br />
                My to robimy bardzo starannie, poznając wcześniej <br />
                Wasze oczekiwania, gust i styl.
              </p>
              <p>
                Jeżeli sesja jest prezentem, w cenie otrzymacie <br />
                imienne zaproszenie dla bliskiej osoby.
              </p>
              <p>
                Sesje odbywają się od poniedziałku do piątku w godz. 9-17. <br />
                lub w soboty po ustaleniach indywidualnych.
              </p>
              <p>
                W dniu rezerwacji prosimy o dokonanie przelewu <br />
                50% wartości pakietu. <br />
                Pozostała kwota płatna w dniu sesji.
              </p>
              <p>
                Sesje trwają od 30 minut do 2 godzin.
              </p>
              <p>
                Cena obejmuje maksymalnie 2 osoby dorosłe plus 2 dzieci.
              </p>
              <p>
                Przy większej liczbie osób biorących udział w sesji - dopłata od 50 zł/osobę, w zależności od pakietu.
              </p>
              <p>
                Nr konta do wpłaty zaliczki <br />
                mBank <br />
                37 1140 2004 0000 3402 4725 5023
              </p>
              <p className='descriptionReservation'>
                Rezerwacja terminu sesji: <br />
                <a href="mailto:studio@fotodawid.eu" className='mailto'>studio@fotodawid.eu
              </a> <br />
                tel. 509 529 819
              </p>
              <p>
                Agencja Fotograficzno-Reklamowa "Dawid" <br />
                Krystyna Grelak <br />
                pl. św. Anny 2 <br />
                43-100 Tychy
              </p>
            </div>
          </div>
        </div>
      </div >
    )
  }
}


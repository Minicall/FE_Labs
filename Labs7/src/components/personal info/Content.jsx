import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fifthColour: {back: '', text: ''},
      sixthColour: {back: '', text: ''}
    };
  }

  findRandomColour() {
    const letters ="0123456789ABCDEF";
    let color = '';
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    return `#${color}`;
  };

  render() {
    return (
      <div>
        <h2> Сидорук Владислав Олегович</h2>
    <p> Місце і дата народження: с. Млинів, 24 січня 2004 р.</p>
    <p> Млинівська гуманітрна гімназія, НТУУ "КПІ" м. Київ</p>

    <p>Хоббі:</p>
    <ul style={{backgroundColor: this.state.fifthColour.back, color: this.state.fifthColour.text}} onClick={() => this.setState({fifthColour: {back: this.findRandomColour(), text: this.findRandomColour()}})}>
        <li>Комп'ютерні ігри</li>
        <li>Волейбол</li>
        <li>Читання книг</li>
        <li>Музика</li>
        <li>Плавання</li>
        <li>Фільми</li>
    </ul>
    
    <p style={{backgroundColor: this.state.sixthColour.back, color: this.state.sixthColour.text}} onClick={() => this.setState({sixthColour: {back: this.findRandomColour(), text: this.findRandomColour()}})}>Улюблені фільми:</p>
    <ol>
        <li>Das Boot</li>
        <li>Врятувати рядового Раяна</li>
        <li>Дюнкерк</li>
        <li>Бункер(2004р.)</li>
        <li>Володар перснів</li>
        <li>На Західному фронті без змін</li>
    </ol>

    <p>Улюблені книги:</p>
    <ol>
        <li>Тигролови</li>
        <li>І знайдеш скарб у собі</li>
        <li>Моя Боротьба</li>
    </ol>

    <p>Інсбрук – одне з найвідоміших і популярних місць відпочинку в Австрії. 
        Сюди приїжджають для того, щоб побачити мальовничі Альпи, помилуватися Старим містом, 
        а також активно провести зимові канікули. Тут проживає близько 130 000 чоловік, 
        а щорічно приїжджає до мільйона туристів. Площа курорту складає 104,91 км квадратних.
    </p>

      </div>
    )
  }
}

export default Content;
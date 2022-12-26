import React from "react";
import './AboutMe.scss'
import background from "../../assets/images/my-photo.jpg";
import rightPhoto from "../../assets/images/right-photo.jpg";


const AboutMe = () => {
  return (
    <section className={'about-me'} > 
      <img className={'about-me__my-photo'} src={background} alt="" />
      <div className={'about-me__card'}>
        <h2 className={'about-me__title'}>Здравствуйте!</h2>
        <p>
          Кратко расскажу то, что может заинтересовать Вас во мне как в кандидате на должность.
        </p>
        <p>
          Имеется опыт работы в печатном и интернет-изданиях.
        </p>
        <div>
          <p className={'about-me__title-list'}>В мои обязанности входило:</p>
          <ul>
            <li>- написание статей и докладов</li>
            <li>- мониторинг новостей</li>
            <li>- составление дайджестов</li>
            <li>- перевод текстов</li>
            <li>- интервьюирование специалистов</li>
            <li>- редактирование комментариев</li>
            <li>Также одной из интереснейших задач в моей практике было составление рубрики.</li>
          </ul> 
        </div>
        <p>
          Образование получила в РУДН по специальностям "зарубежное регионоведение" и "переводчик". За время учёбы осваивала различные гуманитарные дисциплины, необходимые в том числе и журналистам.
        </p>
        <p>
          Я готова и дальше развиваться в сфере журналистики, проходить курсы и тренинги, овладевать новыми навыками и совершенствоваться в этом захватывающем ремесле.
        </p>
      </div>
      <img className={'about-me__right-photo'} src={rightPhoto} alt="" />

    </section>
  )
}

export default AboutMe
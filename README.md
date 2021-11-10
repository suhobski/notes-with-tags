# Notes with tags

### Deploy: [GitHub Pages](https://suhobski.github.io/notes-with-tags/ 'https://suhobski.github.io/notes-with-tags/'), [Netlify](https://admiring-lovelace-79415d.netlify.app/ 'https://admiring-lovelace-79415d.netlify.app/')

Текстовый редактор заметок с тегами.
Теги создаются автомитически после символа "#".

1. Создание, редактирование, просмотр и удаление заметок;
2. Фильтр заметок по тегу;
3. Добавление и удаление тегов из списка.
4. Подсветка тегов при редактировании текста.

Технологии:

- React
- Redux
- MUI

3. Конструкции типа

if (/\p{P}+/u.test(newTag) || /\s+/.test(newTag))

плохо читаются, лучше вынести функцию за пределы компонента, например, в отдельный utils файл

такие штуки хэндлятся лучше всего следующим образом

try {
// a function that potentially throws an error
validateTag();

        // а тут дальше твой код
         // ...

} catch (err) {
// this code handles exceptions
setErrorMessage(e.message);
}

4. Я, может, не нашёл других мест, но есть у тебя компонент ButtonEditNote, ты прокидываешь туда все свойства

sx={{
          position: 'absolute',
          top: 0,
          right: 50,
}}

разделяя уровни абстракции. Ты создаёшь обёрнутый MaterialUI компонент, используешь его один раз и прокидываешь свойства, которые свойственны только материал компоненту. В идеале мы не должны заниматься такими вещами на таких уровнях. Если завтра вы поменяете MaterialUI на что-то другое, то придётся во всём приложении менять. Потому это лучше внутри использовать. В других компонентах часто такое вижу

5. вытекает из пункта 4: props прокидывать и делать {…props} — не самая удачная идея, лучше строго указывать что ты используешь, иначе у тебя теряется предсказуемость. Я бы юзал в редких случаях, у тебя можно этого избежать, насколько я вижу

6. Переписывать стандартные стили — зло

/// TextInput.jsx

const CssTextField = styled(TextField)({
'&': {
margin: '8px 0',
background: '#f8f8f8',
},
'& label.Mui-focused': {
color: '#5A5A65',
},
'& .MuiOutlinedInput-root': {
'&.Mui-focused fieldset': {
borderColor: '#5a5a65',
},
},
});

в целом, если иначе не получается, то такое позволительно, но лучше создавать дополнительный класс, который будет “затирать” поведение стандартных классов

7. Если можно этим управлять в самом компоненте, то лучше делать это там. Через хук, который возвращает createStyles (или как-то так он называется в материале)

style={{
          gridTemplateColumns: matches ? 'auto' : 'minmax(300px, 33%) auto',
}}

Это довольно непредсказуемая штука, лучше через классы CSS юзать

Шаги для улучшения

8. Когда создаёшь заметку, я бы добавил submit на ctrl + enter
9. При нажатии на бейдж тега — поиск по этому тегу
10. в коде встречается

import ModalEditNote from './ModalEditNote/ModalEditNote';

можно создать папку ModalEditNote и index.js файл внутри

/// index.js

export { default } from ‘./ModalEditNote’;

Тогда импортировать можно просто

import ModalEditNote from './ModalEditNote';
import page from '../pages/page-model';
import { Selector } from 'testcafe';
fixture `Test suite example`
    .page `https://razvanvancea.ro`;

test('Test workshops section', async t => {
    await t
        .click(Selector('#nav-menu a[href="#services"]'))
        .expect(Selector('h3.services__title').withText('1 on 1').exists).ok(); 
});

test('razvan'){
    "e in varianta finala, pregatit sa fie comis ca modificari facute de mine";
};
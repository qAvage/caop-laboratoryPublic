<template lang="pug">
footer#the-footer
  UIContainer
    .content
      .logo
        a(href="#")
          UISVGIcon(icon="logo")
      .nav
        ul.nav-list
          li(v-for="i in navList").nav-item
            a(:href="i.anchor") {{ i.name }}
        a(href="#")
          span.p-sm 192174, г.Санкт-Петербург, пр-кт Александровской Фермы, д. 8, стр. 1, пом. 26-Н
      .feed
        h4 Записаться
        UIButton(@click="$emit('someEmit')") Обратный звонок
        a(href="tel:+78129235223") +7 (812) 923-52-23
        p.p-sm с 7:30 до 19:30 без выходных
        ul.ui-social-icons
              UISocialIcons(
                v-for="social in ['vk', 'wa', 'tg']"
                :social="social"
              )
      .bot
        a(href="license.pdf" target="_blank")
          span.p-sm Лицензия на осуществление медицинской деятельности
        a(href="Policy.pdf" target="_blank")
          span.p-sm Политика конфиденциальности
        a(href="personal.pdf" target="_blank")
          span.p-sm Обработка персональных данных
        span.p-sm © ООО «ЦАОП №1», 2022
</template>

<script>
export default {
  name: 'appFooter',
  data () {
    return {
      show: false,
      navList: [
        {
          name: 'Анализы',
          anchor: '#catalog'
        },
        {
          name: 'О нас',
          anchor: '#about'
        },
        {
          name: 'Программы',
          anchor: '#offers'
        },
        {
          name: 'Контакты',
          anchor: '#contacts'
        },
        {
          name: 'Вопрос / ответ',
          anchor: '#faq'
        }
      ]
    }
  }
}
</script>

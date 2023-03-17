<template lang="pug">
section#faq
  UIContainer
    .title
      UITitleIcon Вопрос / Ответ
      h2 Популярные вопросы и ответы
      p Здесь вы можете найти популярные вопросы и ответы на интересующие вас вопросы
    .inner
      ul.accordion
        li.accordion-item(v-for="i in accordionList")
          .accordion-title.u-no-select(
            @click="toggle(i, accordionList)"
            :class="{'is-active' : i.active}")
            h4 {{ i.title }}
            UISVGIcon(icon="plus")
          transition(
            name="accordion"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end")
            .accordion-content(v-if="i.active")
              p {{ i.content }}
      .card.u-no-select
        h3 Остались вопросы? Мы с радостью на них ответим!
        p Напишите нам в любое время в Telegram / WhatsApp / VK
        ul.ui-social-icons
          UISocialIcons(
            v-for="social in ['vk', 'wa', 'tg']"
            :social="social"
            plate=true)
</template>

<script>

export default {
  name: 'appFaq',
  data () {
    return {
      accordionList: [
        {
          active: false,
          title: 'Работаете ли вы в выходные и праздничные дни?',
          content: 'Мы работаем ежедневно. Исключением являются только 1-2 января. Режим работы клиники: Ежедневно с 7:30 до 19:30'
        },
        {
          active: false,
          title: 'Через сколько дней будут готовы анализы?',
          content: 'Все зависит от категории сложности самого анализа. Большинство анализов готовы на следующий день'
        },
        {
          active: false,
          title: 'Какие документы требуются для посещения клиники?',
          content: 'Для посещения клиники необходим паспорт, но возможен и анонимный приём'
        },
        {
          active: false,
          title: 'Можно ли получить консультацию специалиста по результатам анализов?',
          content: 'Конечно! После получения анализов, вы можете записаться на приём к терапевту и получить консультацию по результатам анализов'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    toggle (item, list) {
      if (item.active === false) {
        list.forEach(element => {
          element.active = false
        })
        item.active = true
      } else {
        item.active = false
      }
    },
    start (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end (el) {
      el.style.height = ''
    }
  }
}
</script>

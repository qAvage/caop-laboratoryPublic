<template lang="pug">
section#feedback
  .feedback-wrap
    UIContainer
      .feedback-content
        .calendar
          .icon
            .icon-wrap
              UISVGIcon(icon="calendarFB")
        .content
          h2 Запишись на сдачу любого анализа
          p
            | У нас вы можете сдать полный спектр анализов и получить результат
            | в самые короткие сроки
          form(
            onsubmit="ym(92070141,'reachGoal','analiz'); return true;"
            @submit.prevent="submitForm").main-form
            .field
              input(type="text" name="name" placeholder="Ваше имя" required v-model="form.name")
              input(type="text" name="phone" placeholder="Телефон" required v-model="form.phone")
            .alert
              p
            .submit
              UIButton(type="submit") Записаться
              .politic
                input(id="politic" name="politic" type="checkbox" required)
                label(for="politic") Я ознакомлен и согласен с
                a(href="front/Policy.pdf" target="_blank")  Политикой конфиденциальности
</template>

<script>
import axios from 'axios'

export default {
  name: 'appFeedback',
  data () {
    return {
      form: {
        name: '',
        phone: ''
      }
    }
  },
  methods: {
    submitForm () {
      axios.post('mail.php', this.form)
        .then(response => {
          this.form.name = ''
          this.form.phone = ''
        })
    }
  }
}
</script>

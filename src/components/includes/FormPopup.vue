<template lang="pug">
#popup
  .inner
    UISVGIcon(icon="close" @click="$emit('someEmit')")
    transition(name="pop")
      .form(v-if="show")
        h2 Записаться на анализ
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
              a(href="Policy.pdf" target="_blank")  Политикой конфиденциа
      .success(v-else)
        h2 Вы записаны на сдачу анализов
        p Менеджер свяжется с вами в ближайшее время для подтверждения записи
  .overlay(@click="$emit('someEmit')")
</template>

<script>
import axios from 'axios'

export default {
  name: 'appPopup',
  data () {
    return {
      show: true,
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
          this.show = false
          setTimeout(() => this.$emit('someEmit'), 3000)
        })
    }
  },
  mounted () {
    document.body.style.overflow = 'hidden'
  },
  unmounted () {
    document.body.style.overflow = 'visible'
  }
}

</script>

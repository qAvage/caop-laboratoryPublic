<template lang="pug">
header#the-header.u-no-select
  .top
    UIContainer
      .backdrop
        a(href="").logo
          UISVGIcon(icon="logo")
        nav.nav
          ul.nav-list
            li(v-for="i in navList").nav-item
              a(:href="i.anchor") {{ i.name }}
        .connection
          a(href="tel:+78129235223").mob-phone +7 (812) 923-52-23
          UIButton(kind='secondary' @click="$emit('someEmit')") Обратный звонок
        button(@click="showMenu()").burger.u-no-select
          UISVGIcon(icon="burger")
      transition(name="show")
        .mobile-menu(v-if="show")
          .mobile-menu-body
            nav.nav
              ul.nav-list
                li(v-for="i in navList" @click="showMenu()").nav-item
                  a(:href="i.anchor")
                    h4 {{ i.name }}
            UIButton(@click="$emit('someEmit'), closeMenu()") Обратный звонок
            a(href="tel:+78129235223") +7 (812) 923-52-23
            p с 9:00 до 18:00 без выходных
            a(href="https://yandex.ru/maps/-/CCUVZYRATA" target="_blank") 192174, г. Санкт-Петербург, пр-кт Александровской Фермы, д. 8, стр. 1, пом. 26-Н
            ul.ui-social-icons
              UISocialIcons(
                v-for="social in ['vk', 'wa', 'tg']"
                :social="social"
              )
          .mobile-menu-backdrop(@click="closeMenu")
  UIContainer
    .hero
      UITitleIcon ЦАОП № 1
      h1 У нас вы можете сдать анализы по #[span выгодной цене]
      ul
        li(v-for="i in heroList")
          p {{ i.title }}
      UIButton(@click="$emit('someEmit')") Записаться на анализ
      .bottom
        img(src='@/assets/img/bg-img-sm.png')
      HeaderTooltip(
        v-for="(tooltip, index) in tooltips"
        @mouseOver="mouseOver($event)"
        @mouseOut="mouseOut()"
        :title="tooltip.title"
        :content="tooltip.content"
        :onLeft="tooltip.onLeft"
        :idx="index"
        :showTooltip="showTooltip")
</template>

<script>
import HeaderTooltip from './HeaderTooltip'

export default {
  name: 'appHeader',
  components: {
    HeaderTooltip
  },
  data () {
    return {
      showTooltip: '',
      show: false,
      tooltips: [
        {
          title: 'Своя лаборатория',
          content: 'Точность диагностики и низкие цены на большинство анализов. Сжатые сроки выполнения',
          onLeft: false
        },
        {
          title: 'Квалифицированные врачи',
          content: 'У нас работают специалисты высшей и первой категории, со стажем более 7 лет',
          onLeft: true
        },
        {
          title: 'Современное оборудование',
          content: 'Мы используем только современное оборудование, что позволяет повысить качество обследований',
          onLeft: false
        }
      ],
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
      ],
      heroList: [
        {
          title: 'В нашем центре вы можете выбрать комплекс анализов в' +
          ' соответствии с Вашим индивидуальным запросом'
        },
        {
          title: 'Более 2600 видов анализов и лабораторных исследований'
        },
        {
          title: 'Быстрое и качественное исполнение'
        }
      ]
    }
  },
  watch: {
    // lis () {
    //   if (this.show) {
    //     window.addEventListener('scroll', (event) => {
    //       console.log(event)
    //     })
    //   }
    // }
  },
  methods: {
    mouseOver (e) {
      this.showTooltip = e
    },
    mouseOut () {
      this.showTooltip = ''
    },
    showMenu () {
      this.show = !this.show
      document.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
          this.closeMenu()
        }
      })
    },
    closeMenu () {
      this.show = false
    }
  },
  mounted () {

  }
}

</script>

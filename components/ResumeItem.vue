<template>
  <b-card >
    <div class="header">
      <span class="company">{{ experience.company }}</span>
      <b-button variant="outline-primary" @click="filterYears(experience)" class="border-0">
        <span class="year" @click="dateRangeSelect(experience.startDate, experience.endDate)">
          {{ `${experience.startDate} - ${experience.endDate || 'Present'}` }}
          </span>
      </b-button>
    </div>
    <div class="role">
      {{ experience.role }}
    </div>
    <!-- <b-collapse :id="itemSlug"> -->
      <ul class="bullets">
          <li class="bullet" :class="{ highlight: highlightedText(bullet.text)}" v-for="bullet in firstBullets" :key="bullet.text">
            <font-awesome-icon class="bullet-icon" size="xs" icon="dot-circle" fill="blue" />
            <p class="bullet-text">{{ bullet.text }}</p>
          </li>
          <span v-show="showBullets">
            <li class="bullet" :class="{ highlight: highlightedText(bullet.text)}" v-for="bullet in restBullets" :key="bullet.text">
              <font-awesome-icon class="bullet-icon" size="xs" icon="dot-circle" fill="blue" />
              <p class="bullet-text">{{ bullet.text }}</p>
            </li>
          </span>
      </ul>
      <!-- </b-collapse> -->
      <div class="view-more" v-if="restBullets.length" @click.capture="toggleShowMore">
        {{ showMoreText }}
      </div>
    <section class="tags">
      <b-badge
        class="tag"
        :class="{ highlight: highlightedText(tag)}"
        variant="primary"
        v-for="tag in experience.tags"
        @click="tagClick(tag)"
        :key="tag">
        {{ tag }}
      </b-badge>
    </section>
  </b-card>
</template>
<script>
export default {
  name: 'ResumeItem',
  props: {
    experience: {
      type: Object,
      default: {}
    },
    query: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showBullets: false
    }
  },
  watch: {
    query (newQ) {
      if (newQ === '') this.showBullets = false
    }
  },
  computed: {
    firstBullets () {
      return this.experience.bullets.slice(0,2)
    },
    restBullets () {
      return this.experience.bullets.slice(2)
    },
    showMoreText () {
      let showHide = this.showBullets ? 'Less' : 'More'
      return `Show ${showHide}`
    },
    itemSlug() {
      return this.slugify(this.experience.company);
    }
  },
  methods: {
    toggleShowMore () {
      this.showBullets = !this.showBullets;
    },
    slugify (text) {
      return (text || '').toLowerCase().split(' ').join('-')
    },
    filterYears (experience) {
      this.$emit('filter-years', experience)
    },
    dateRangeSelect (start, end) {
      this.$emit('date-range', { start, end })
    },
    highlightedText (text) {
      let isHighlighted = this.query.trim() !== '' && text.toLowerCase().includes(this.query)
      if (isHighlighted) this.showBullets = true
      return isHighlighted
    },
    tagClick (tag){
      this.$emit('tag-click', tag)
    }
  }
}
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .company {
      background-color: #ebfbfd;
      padding: 3px 5px;
      text-align: left;
      max-width: 60%;
      font-weight: bold;

      .year-button {
      }
    }
  }

  .tags {
    text-align: left;
    .highlight {
      background-color: #ffd400;
      color: #21262a;
    }

    .tag {
      padding: 5px;
      margin-right: 5px;
      cursor: pointer;
    }
  }

  .role {
    display: flex;
    justify-content: flex-start;
    font-weight: bold;
  }

  .bullets {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 20px;

    .highlight {
      background-color: #ffd400;
      color: #21262a;
    }

    .bullet {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      text-align: left;
      width: 80%;

      .bullet-icon {
        display: inline-flex;
        margin-right: 10px;
        margin-top: 6px;
      }
      .bullet-text {
        display: inline-flex;
        margin-bottom: 0.5rem;
      }
    }
  }

  .view-more {
    width: fit-content;
    display: flex;
    border: 1px solid;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
    margin-left: 20px;
    border-color: #ebfafd;
    background-color: #ebfafd;
    &:hover {
      border-color: #ebfafd;
      background-color: white;
    }
  }
</style>
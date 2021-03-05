<template>
  <div class="container">
    <b-card
      class="main"
    >
      <b-form-input v-model="query" placeholder="Search the resume..."></b-form-input>
      <b-row class="resume">
          <b-col sm="12" :md="experienceCol" class="section experience-section" v-if="!this.collapseSection.experience">
            <font-awesome-icon class="expand" :icon="expandIcon" @click="toggleSection('experience')"/>
            <section class="experiences" v-if="filteredExperiences.length">
              <h1>Experience</h1>
                <resume-item class="experience"
                  v-for="experience in filteredExperiences"
                  :key="experience.title"
                  :experience="experience"
                  :query="query"
                  @tag-click="tagClick"
                  @date-range="dateRangeSelect"
                  @filter-years="filterYears"/>
            </section>
          </b-col>
          <b-col sm="12" :md="skillsCol" id="skills" class="section skills-section" v-if="!this.collapseSection.skills">
            <font-awesome-icon class="expand" :icon="expandIcon" @click="toggleSection('skills')"/>
            <section v-if="filteredEducation.length">
              <h1>Education</h1>
              <section class="experiences">
                <resume-item class="experience"
                    v-for="experience in filteredEducation"
                    :key="experience.title"
                    :experience="experience"
                    :query="query"
                    @tag-click="tagClick"
                    @date-range="dateRangeSelect"
                    @filter-years="filterYears"/>
              </section>
            </section>
            <section>
              <h1>Skills</h1>
              <skills-chart :startYear="dateRange.start" :endYear="dateRange.end"/>
            </section>
            <section>
              <h6>Click below to view resume as a PDF</h6>
              <img class="resume-thumb" src="~/assets/resume_thumb.png" alt="" @click="openPDF">
            </section>
            <section v-if="filteredVolunteer.length">
              <h1>Giving Back</h1>
              <section class="experiences">
                <resume-item class="experience"
                  v-for="experience in filteredVolunteer"
                  :key="experience.title"
                  :experience="experience"
                  :query="query"
                  @tag-click="tagClick"
                  @date-range="dateRangeSelect"
                  @filter-years="filterYears"/>
              </section>
            </section>
          </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { education, experiences, volunteer } from '@/data/resume'
const defaultExperienceColumnWidth = 8
const defaultSkillsColumnWidth = 4

const currentDate = new Date().getFullYear()
const someOf = (items, value) => {
  return items.some(item => {
    if (!item) return false
    if (typeof item === 'object') {
      return someOf(Object.values(item), value)
    }
    return item.toLowerCase().includes(value)  
  })
}

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

export default {
  name: 'portfolio',
  methods: {
    yearButtonType (experience) {
      return this.yearSelected(experience) ? 'success' : 'outline-primary'
    },
    yearSelected (experience) {
      let { start, end } = this.dateRange
      let isSelected = start === parseInt(experience.startDate)
                      && end === parseInt(experience.endDate || currentDate)
      return isSelected
    },
    dateRangeSelect ({start, end}) {
      if (this.yearSelected({startDate: start, endDate: end})) this.dateRange = {}
      else {
        end = parseInt(end) || currentDate
        start = parseInt(start)
        this.dateRange = {
          start,
          end
        }
      }

      this.redrawSkills()
    },
    tagClick (text) {
      if (text === this.query) this.query = ''
      else this.query = text;
    },
    openPDF () {
      const pdfPath = '/resume.pdf';
      window.open(pdfPath);
    },
    filterYears (experience) {
      if (!experience) this.filters.years = null
      let {startDate, endDate} = experience
      this.filters.years = range(parseInt(endDate || 2020) - parseInt(startDate) + 1, parseInt(startDate))
    },
    checkCols () {
      if (this.collapseSection['skills']) {
        this.experienceCol = 12
        this.skillsCol = 0
      } else if (this.collapseSection['experience']) {
        this.experienceCol = 0
        this.skillsCol = 12
      } else {
        this.experienceCol = defaultExperienceColumnWidth
        this.skillsCol = defaultSkillsColumnWidth
      }
    },
    redrawSkills(){
      this.collapseSection['skills'] = true
      this.$nextTick(() => {
        this.collapseSection['skills'] = false
        this.checkCols()
      })
    },
    toggleSection (section) {
      if (section === 'skills') {
        this.collapseSection['experience'] = !this.collapseSection['experience']
        this.redrawSkills()
      } else if (section === 'experience') {
        this.collapseSection['skills'] = !this.collapseSection['skills']
        this.checkCols()
      }
    }
  },
  mounted () {
    // this.experiences.forEach(e => e.tags.sort())
  },
  computed: {
    expandIcon () {
      return Object.values(this.collapseSection).includes(true) ? 'compress-arrows-alt' : 'expand-arrows-alt'
    },
    filteredEducation () {
      if (this.query === '') return education
      return education.filter(ed => {
        return someOf(Object.values(ed), this.query)
      })
    },
    filteredVolunteer () {
      if (this.query === '') return volunteer
      return volunteer.filter(v => {
        return someOf(Object.values(v), this.query)
      })
    },
    filteredExperiences () {
      if (this.query === '') return experiences
      return experiences.filter(experience => {
        return someOf(Object.values(experience), this.query)
      })
    },
    selectedFilters () {
      return Object.values(this.filters).find(filter => filter !== null)
    }
  },
  data () {
    return {
      filters: {
        years: null
      },
      experienceCol: defaultExperienceColumnWidth,
      skillsCol: defaultSkillsColumnWidth,
      collapseSection: {
        experience: false,
        skills: false
      },
      query: '',
      dateRange: {}
    }
  }
}
</script>

<style lang="scss" scoped>

.resume-thumb {
  max-width: 100%;
  cursor: pointer;
}

#skills {
    font-family: "SignikaNegative-Light";
}

.resume {
  display: flex;
  flex-direction: row;
  font-family: "SignikaNegative-Light";
  padding-top: 15px;
  color: #343a40;

  .experience-section {
    width: 100%;
    border-right: 1px solid #cfcfd0;

    &.expanded {
      border: none;
    }
  }


}
.main {
  width: 100%;

  .resume {
  }
}

  .section {
    width: 100%;
    padding: 0;
    .experience {
      border: none;
    }
  }

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  // margin-top: 20px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.expand {
  cursor: pointer;
  position: absolute;
  right: 20px;
}
</style>

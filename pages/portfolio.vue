<template>
  <div class="container">
    <b-card
      class="main"
    >
      <b-form-input v-model="query" placeholder="Search the resume..."></b-form-input>
      <b-row class="resume">
          <b-col sm="12" :md="experienceCol" class="section experience-section" v-if="!this.collapseSection.experience">
            <font-awesome-icon class="expand" :icon="expandIcon" @click="toggleSection('experience')"/>
            <h1>Experience</h1>
            <section class="experiences">
              <b-card class="experience" v-for="experience in filteredExperiences" :key="experience.title">
                <div class="header">
                  <span class="company">{{ experience.company }}</span>
                  <b-button
                    :variant="yearButtonType(experience)"
                    @click="filterYears(experience)"
                    class="border-0">
                    <span class="year" @click="dateRangeSelect(experience.startDate, experience.endDate)">
                      {{ `${experience.startDate} - ${experience.endDate || 'Present'}` }}
                      </span>
                  </b-button>
                </div>
                <div class="role">
                  {{ experience.role }}
                </div>
                <ul class="bullets">
                  <li class="bullet" :class="{ highlight: highlightedText(bullet.text)}" v-for="bullet in experience.bullets" :key="bullet.text">
                    <font-awesome-icon class="bullet-icon" size="xs" icon="dot-circle" fill="blue" />
                    <p class="bullet-text">{{ bullet.text }}</p>
                  </li>
                </ul>
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
            </section>
          </b-col>
          <b-col sm="12" :md="skillsCol" id="skills" class="section skills-section" v-if="!this.collapseSection.skills">
            <font-awesome-icon class="expand" :icon="expandIcon" @click="toggleSection('skills')"/>
            <section>
              <h1>Education</h1>
              <!-- Education -->
              <section class="experiences">
                <b-card class="experience" v-for="experience in filteredEducation" :key="experience.title">
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
                  <ul class="bullets">
                    <li class="bullet" :class="{ highlight: highlightedText(bullet.text)}" v-for="bullet in experience.bullets" :key="bullet.text">
                      <font-awesome-icon class="bullet-icon" size="xs" icon="dot-circle" fill="blue" />
                      <p class="bullet-text">{{ bullet.text }}</p>
                    </li>
                  </ul>
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
              </section>
            </section>
            <section>
              <h1>Skills</h1>
              <skills-chart :startYear="dateRange.start" :endYear="dateRange.end"/>
            </section>
            <section>
              <img class="resume-thumb" src="~/assets/resume_thumb.png" alt="" @click="openPDF">
            </section>
            <section>
              <!-- Giving Back -->
            </section>
          </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { education, experiences, skills } from '@/data/resume'
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
    dateRangeSelect (start, end) {
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
      this.query = text;
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
    highlightedText (text) {
      return this.query.trim() !== '' && text.toLowerCase().includes(this.query)
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
      // experiences: resumeData.experiences,
      dateRange: {}
    }
  }
}
</script>

<style lang="scss" scoped>

.resume-thumb {
  max-width: 100%;
}
.highlight {
  // background-color: #caf0f3;
  background-color: #ffd400;
  color: #21262a;
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
    width: 60%;
    border-right: 1px solid #cfcfd0;

    &.expanded {
      border: none;
    }
  }

  .section {
    width: 100%;
    padding: 0;
        .experience {
      border: none;

      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .company {
          background-color: #ebfbfd;
          padding: 3px 5px;
          text-align: left;
          max-width: 60%;

          .year-button {
          }
        }
      }

      .tags {
        text-align: left;

        .tag {
          padding: 5px;
          margin-right: 5px;
          cursor: pointer;
        }
      }

      .role {
        display: flex;
        justify-content: flex-start;
      }

      .bullets {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-left: 20px;

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
    }
  }
}
.main {
  width: 100%;

  .resume {
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

.links {
  padding-top: 15px;
}

.expand {
  cursor: pointer;
  position: absolute;
  right: 20px;
}
</style>

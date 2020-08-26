<template>
  <div class="skills-chart">
    <vue-frappe
      id="language"
      :labels="labels"
      title="Programming Language Growth Chart"
      type="bar"
      :height="300"
      :colors="['purple', '#ffa3ef', 'light-blue', 'green']"
      :dataSets="languageChartData">
    </vue-frappe>
    <vue-frappe
      id="frameworks"
      :labels="labels"
      title="Framework Growth Chart"
      type="bar"
      :height="300"
      :colors="['purple', '#ffa3ef', 'light-blue', 'green', 'blue']"
      :dataSets="frameworkChartData">
    </vue-frappe>
    <vue-frappe
      id="software"
      :labels="labels"
      title="Software Growth Chart"
      type="bar"
      :height="300"
      :colors="['purple', '#ffa3ef', 'light-blue', 'green']"
      :dataSets="languageChartData">
    </vue-frappe>
  </div>
</template>
<script>
import resumeData from '@/data/resume'

export default {
  name: 'SkillsChart',
  data () {
      return {
        labels: [
            '2011', '2012', '2013', '2014',
            '2015', '2016', '2017', '2018', '2019', '2020'
        ],
        languageChartData: [{
              name: "Java", chartType: 'line',
              values: [0, 30, 60, 80, 70, 65, 60, 55, 60, 65]
          }, 
          {
              name: "JavaScript", chartType: 'line',
              values: [0, 10, 50, 70, 75, 85, 90, 95, 95, 100]
          },
          {
              name: "Ruby", chartType: 'line',
              values: [0, 20, 50, 60, 80, 90, 95, 95, 90, 90]
          },
          {
              name: "Python", chartType: 'line',
              values: [0, 5, 5, 10, 30, 40, 45, 55, 65, 75]
          }
        ],
        frameworkChartData: [{
              name: "Express.js", chartType: 'line',
              values: [0, 0, 5, 5, 40, 75, 80, 85, 85, 90]
          }, 
          {
              name: "Vue.js", chartType: 'line',
              values: [0, 0, 0, 0, 0, 0, 0, 70, 85, 95]
          },
          {
              name: "Node.js", chartType: 'line',
              values: [0, 0, 5, 10, 50, 80, 85, 90, 90, 95]
          },
          {
              name: "Ruby on Rails", chartType: 'line',
              values: [5, 15, 55, 70, 85, 90, 95, 90, 85, 90]
          },
          {
              name: "Sinatra", chartType: 'line',
              values: [5, 15, 25, 30, 50, 60, 45, 45, 50, 50]
          },
          {
              name: "Polymer.js", chartType: 'line',
              values: [0, 0, 0, 0, 30, 60, 80, 85, 55, 40]
          },
          {
              name: "Meteor.js", chartType: 'line',
              values: [0, 5, 15, 45, 65, 80, 85, 70, 65, 65]
          }
        ],
      }
  }
}
</script>
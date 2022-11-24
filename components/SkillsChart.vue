<template>
  <div class="skills-chart">
    <h5>Programming Language Growth Chart</h5>
    <vue-frappe
      ref="languageChart"
      id="language"
      :labels="filteredLabels"
      type="bar"
      :height="300"
      :colors="colors"
      :dataSets="filteredLanguageData"
      :tooltipOptions="tooltipOptions"
    >
    </vue-frappe>
    <h5>Framework Growth Chart</h5>
    <vue-frappe
      id="frameworks"
      :labels="filteredLabels"
      type="bar"
      :height="300"
      :colors="colors"
      :tooltipOptions="tooltipOptions"
      :dataSets="filteredFrameworkData"
    >
    </vue-frappe>
    <h5>Tooling Growth Chart</h5>
    <vue-frappe
      id="software"
      :labels="filteredLabels"
      type="bar"
      :height="300"
      :colors="colors"
      :tooltipOptions="tooltipOptions"
      :dataSets="filteredSoftwareData"
    >
    </vue-frappe>
  </div>
</template>
<script>
import resumeData from "@/data/resume";
const labels = [
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

const colors = [
  "purple",
  "#ffa3ef",
  "light-blue",
  "green",
  "blue",
  "red",
  "orange",
  "purple",
];
export default {
  name: "SkillsChart",
  props: {
    startYear: {
      type: Number,
    },
    endYear: {
      type: Number,
    },
  },
  computed: {
    tooltipOptions() {
      return {
        formatTooltipX: (d) => (d + "").toUpperCase(),
        formatTooltipY: (d) => d + "%",
      };
    },
    filteredIndices() {
      let start = 0;
      let end = this.labels.length - 1;
      while (
        this.labels[start] < (this.startYear || 2000) ||
        this.labels[end] > (this.endYear || 2040)
      ) {
        if (this.labels[end] > this.endYear) end--;
        if (this.labels[start] < this.startYear) start++;
      }
      return [start, end];
    },
    filteredLabels() {
      let [start, end] = this.filteredIndices;
      if (start === undefined || end === undefined) return this.labels;
      return this.labels.slice(start, end + 1);
    },
    filteredLanguageData() {
      let [start, end] = this.filteredIndices;
      return this.languageChartData.map((d) => {
        return {
          ...d,
          values: d.values.slice(start, end + 1),
        };
      });
    },
    filteredFrameworkData() {
      let [start, end] = this.filteredIndices;
      return this.frameworkChartData.map((d) => {
        return {
          ...d,
          values: d.values.slice(start, end + 1),
        };
      });
    },
    filteredSoftwareData() {
      let [start, end] = this.filteredIndices;
      return this.softwareChartData.map((d) => {
        return {
          ...d,
          values: d.values.slice(start, end + 1),
        };
      });
    },
  },
  data() {
    return {
      colors,
      labels,
      languageChartData: [
        {
          name: "Java",
          chartType: "line",
          values: [0, 30, 60, 80, 70, 65, 60, 55, 60, 65, 60, 65, 65],
        },
        {
          name: "JavaScript",
          chartType: "line",
          values: [0, 10, 50, 70, 75, 85, 90, 95, 95, 100, 100, 100],
        },
        {
          name: "Ruby",
          chartType: "line",
          values: [0, 20, 50, 60, 80, 90, 95, 95, 90, 90, 90, 80, 75],
        },
        {
          name: "Python",
          chartType: "line",
          values: [0, 5, 5, 10, 30, 40, 45, 55, 65, 75, 80, 70, 70],
        },
        {
          name: "PHP",
          chartType: "line",
          values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 80, 85],
        },
      ],
      frameworkChartData: [
        {
          name: "Express.js",
          chartType: "line",
          values: [0, 0, 5, 5, 40, 75, 80, 85, 85, 90, 90, 95],
        },
        {
          name: "Vue.js",
          chartType: "line",
          values: [0, 0, 0, 0, 0, 0, 70, 85, 95, 95, 90, 95],
        },
        {
          name: "Node.js",
          chartType: "line",
          values: [0, 0, 5, 10, 50, 80, 85, 90, 90, 95, 100, 100],
        },
        {
          name: "Ruby on Rails",
          chartType: "line",
          values: [5, 15, 55, 70, 85, 90, 95, 90, 85, 90, 90, 85],
        },
        {
          name: "React.js",
          chartType: "line",
          values: [0, 0, 0, 0, 30, 60, 80, 75, 70, 80, 85, 85],
        },
        {
          name: "Meteor.js",
          chartType: "line",
          values: [0, 5, 15, 45, 65, 80, 85, 70, 65, 65, 60, 60],
        },
        {
          name: "Nuxt.js/Next.js",
          chartType: "line",
          values: [0, 0, 0, 0, 0, 0, 60, 70, 85, 90, 95, 95],
        },
      ],
      softwareChartData: [
        {
          name: "Adobe CC Suite",
          chartType: "line",
          values: [40, 60, 80, 85, 90, 85, 85, 80, 85, 90],
        },
        {
          name: "Sketch/Figma",
          chartType: "line",
          values: [0, 0, 15, 30, 40, 50, 55, 60, 55, 60, 70, 75],
        },
        {
          name: "Jupyter Notebook",
          chartType: "line",
          values: [0, 0, 0, 0, 0, 0, 60, 75, 80, 85, 80, 80],
        },
        {
          name: "Visual Studio Code",
          chartType: "line",
          values: [0, 0, 0, 0, 0, 0, 65, 70, 85, 90, 95, 95],
        },
        {
          name: "New Relic/Splunk",
          chartType: "line",
          values: [0, 0, 0, 30, 50, 75, 65, 70, 70, 75, 75, 80],
        },
        {
          name: "Git",
          chartType: "line",
          values: [40, 60, 80, 85, 85, 90, 95, 95, 95, 95, 95, 95],
        },
        {
          name: "Agile Tools (Jira)",
          chartType: "line",
          values: [10, 25, 40, 60, 75, 75, 80, 80, 85, 90, 95, 90],
        },
      ],
    };
  },
};
</script>

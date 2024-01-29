import { LightningElement } from 'lwc';
import PortAssets from '@salesforce/resourceUrl/PortAssets'
export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortAssets}/PortAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortAssets}/PortAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortAssets}/PortAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortAssets}/PortAssets/Projects/WeatherApp.png`
    SurveyApp = `${PortAssets}/PortAssets/Projects/Survey.png`
    NoteApp = `${PortAssets}/PortAssets/Projects/NoteTakingApp.png`

    projects=[
        {
            "name":"BMI Calculator App",
            "img":this.BMICalculator,
            "link":"https://jtportfolio-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            "name":"Alarm Clock App",
            "img":this.AlarmClock,
            "link":"https://jtportfolio-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            "name":"Curreny Converter App",
            "img":this.CurrencyCalculator,
            "link":"https://jtportfolio-dev-ed.develop.my.site.com/currency-converter"
        },
        {
            "name":"Weather App",
            "img":this.WeatherApp,
            "link":"https://jtportfolio-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name":"Survey App",
            "img":this.SurveyApp,
            "link":"https://jtportfolio-dev-ed.develop.my.site.com/survey/survey/runtimeApp.app?invitationId=0KiHo000000PUhj&surveyName=employee_survey&UUID=291fda7c-c328-485a-b748-a94a3c2ae942"
        },
        {
            "name":"Note Taking App",
            "img":this.NoteApp,
            "link":"https://jtportfolio-dev-ed.develop.my.site.com/note-taking-app"
        }
    ]
}
import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import PortAssets from '@salesforce/resourceUrl/PortAssets'
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c'
import AWARDS_FIELD from '@salesforce/schema/Portfolio__c.Awards__c'
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c'
export default class PortfolioOtherDetails extends LightningElement {
    superbadges=[]
    languages=[]
    awards=[]
    awardIcon = `${PortAssets}/PortAssets/trophy.png`
    languageIcon = `${PortAssets}/PortAssets/language.png`
    badgeIcon = `${PortAssets}/PortAssets/badge.png`
    @api recordId
    @wire(getRecord, {
        recordId:'$recordId',
        fields:[SUPERBADGE_FIELD, AWARDS_FIELD, LANGUAGES_FIELD]
    })otherFieldsHandler({data, error}){
        if(data){
            console.log("otherFieldsHandler data", JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error("otherFieldsHandler error", error)
        }
    }
    formatData(data){
        const {Awards__c, Languages__c, Superbadges__c} = data.fields
        this.awards = Awards__c && Awards__c.value ? Awards__c.value.split(','):[]
        this.languages = Languages__c && Languages__c.value ? Languages__c.value.split(','):[]
        this.superbadges = Superbadges__c && Superbadges__c.value ? Superbadges__c.value.split(';'):[]
    }
}
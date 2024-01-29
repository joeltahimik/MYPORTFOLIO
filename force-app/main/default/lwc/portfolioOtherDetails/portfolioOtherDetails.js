import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c'
import AWARDS_FIELD from '@salesforce/schema/Portfolio__c.Awards__c'
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c'

import PortAssets from '@salesforce/resourceUrl/PortAssets'
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
    })otherDetailsHandler({data, error}){
        if(data){
            console.log("otherDetails data", JSON.stringify(data))
            this.formatOtherDetails(data)
        }
        if(error){
            console.error("otherDetails error", error)
        }
    }
    formatOtherDetails(data){
        const {Superbadges__c, Awards__c, Languages__c} = data.fields
        this.superbadges = Superbadges__c && Superbadges__c.value ? Superbadges__c.value.split(';'):[]
        this.awards = Awards__c && Awards__c.value ? Awards__c.value.split(','):[]
        this.languages = Languages__c && Languages__c.value ? Languages__c.value.split(','):[]
        
    }
}
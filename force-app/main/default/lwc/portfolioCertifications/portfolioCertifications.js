import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import PortAssets from '@salesforce/resourceUrl/PortAssets'
import SF_CERT_FIELDS from '@salesforce/schema/Portfolio__c.SalesforceCertifications__c'
import OTHER_CERT_FIELDS from '@salesforce/schema/Portfolio__c.OtherCertifications__c'
export default class PortfolioCertifications extends LightningElement {
    sfCertsList = []
    otherCertsList = []
    certLogo = `${PortAssets}/PortAssets/cert_logo.png`

    @api recordId
    @wire(getRecord, {
        recordId:'$recordId',
        fields:[SF_CERT_FIELDS, OTHER_CERT_FIELDS]
    })certsHandler({data, error}){
        if(data){
            console.log("certsHandler data", JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error("certsHandler error", error)
        }
    }

    formatData(data){
       const{SalesforceCertifications__c, OtherCertifications__c} =  data.fields
       this.sfCertsList =  SalesforceCertifications__c? SalesforceCertifications__c.value.split(';').map(item=>{
            return `Salesforce Certified ${item}`
       }):[]
      this.otherCertsList = OtherCertifications__c ? OtherCertifications__c.value.split(','):[]

    }
}
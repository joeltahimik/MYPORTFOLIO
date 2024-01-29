import { LightningElement, api } from 'lwc';
import PortAssets from '@salesforce/resourceUrl/PortAssets'

export default class PortfolioUserStats extends LightningElement {
    trailheadRankImg
    @api badges 
    @api points
    @api trails 
    @api rank

    renderedCallback(){
        if(this.rank){
            let url = `${PortAssets}/PortAssets/Ranks/${this.rank}.png`
            this.trailheadRankImg = url
        }
    }

}
import { Tip } from '../../models/webview1';
import { apiService } from '../../services/api-service';

export function getTipList(tips: Tip[]): string {
    return tips.map((tip: Tip) => `<li><a href="#tip-details-article/${tip.id}">${tip.title}</a></li>`).join('');
}

export function updateTipList(elementId: string) {
    apiService.getTips().then(function (response) {
        document.getElementById(elementId).innerHTML = `<ol>${getTipList(response)}</ol>`;
    });
}

export function updateTipDetails(titleElementId: string, descriptionElementId: string, tipId: string) {
    apiService.getTips().then(function (response) {
        const tip = response.filter(t => t.id === tipId)[0];
        if (tip) {
            document.getElementById(titleElementId).innerHTML = tip.title;
            document.getElementById(descriptionElementId).innerHTML = tip.description;
        }
    });
}
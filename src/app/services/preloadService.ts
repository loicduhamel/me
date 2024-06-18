import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {

  private assets: string[] = [
    '/assets/document/cv_loic_duhamel.pdf',
    '/assets/image/astek.png',
    '/assets/image/astek_formation.png',
    '/assets/image/bac_pro_commerce.png',
    '/assets/image/bachelor_man_com_mar.png',
    '/assets/image/beer.gif',
    '/assets/image/bep_mrcu.png',
    '/assets/image/boulanger.png',
    '/assets/image/bts_sio_slam.png',
    '/assets/image/carrefour.png',
    '/assets/image/certificat_orsys_gcp.png',
    '/assets/image/community_manager.gif',
    '/assets/image/departement_du_nord.png',
    '/assets/image/developer.gif',
    '/assets/image/driving_licence.gif',
    '/assets/image/efficom.png',
    '/assets/image/epsi.png',
    '/assets/image/flunch.png',
    '/assets/image/french.png',
    '/assets/image/gcp.png',
    '/assets/image/gcp_certification.png',
    '/assets/image/gemo.png',
    '/assets/image/heroic_fantasy.gif',
    '/assets/image/ineat.png',
    '/assets/image/isefac.png',
    '/assets/image/kiabi.png',
    '/assets/image/logo.png',
    '/assets/image/loic_duhamel.png',
    '/assets/image/master_expert_ing_it_1.png',
    '/assets/image/master_expert_ing_it_2.png',
    '/assets/image/mon_imaginarium.png',
    '/assets/image/new_technologies.gif',
    '/assets/image/sad_marketing.png',
    '/assets/image/science_fiction.gif',
    '/assets/image/sensitization_environment.png',
    '/assets/image/sensitization_gdpr.png',
    '/assets/image/sensitization_gdpr_iso27001_niv1.png',
    '/assets/image/sensitization_gdpr_iso27001_niv2.png',
    '/assets/image/sensitization_quality.png',
    '/assets/image/space_news.gif',
    '/assets/image/st_paul.png',
    '/assets/image/titre_pro_cdi.png',
    '/assets/image/video_games.gif',
    '/assets/image/web_marketer.gif',
    '/assets/image/webpulser.png',
  ];

  constructor() { }

  preloadAssets(): Promise<void> {
    const promises = this.assets.map(asset => this.loadAsset(asset));
    return Promise.all(promises).then(() => {});
  }

  private loadAsset(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        console.log(`Loaded: ${url}`);
        resolve();
      };
      img.onerror = () => {
        console.error(`Failed to load: ${url}`);
        reject();
      };
    });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {

  private assets: string[] = [
    'https://loicduhamel.github.io/me/assets/image/astek.png',
    'https://loicduhamel.github.io/me/assets/image/astek_formation.png',
    'https://loicduhamel.github.io/me/assets/image/bac_pro_commerce.png',
    'https://loicduhamel.github.io/me/assets/image/bachelor_man_com_mar.png',
    'https://loicduhamel.github.io/me/assets/image/beer.gif',
    'https://loicduhamel.github.io/me/assets/image/bep_mrcu.png',
    'https://loicduhamel.github.io/me/assets/image/boulanger.png',
    'https://loicduhamel.github.io/me/assets/image/bts_sio_slam.png',
    'https://loicduhamel.github.io/me/assets/image/carrefour.png',
    'https://loicduhamel.github.io/me/assets/image/certificat_orsys_gcp.png',
    'https://loicduhamel.github.io/me/assets/image/community_manager.gif',
    'https://loicduhamel.github.io/me/assets/image/departement_du_nord.png',
    'https://loicduhamel.github.io/me/assets/image/developer.gif',
    'https://loicduhamel.github.io/me/assets/image/driving_licence.gif',
    'https://loicduhamel.github.io/me/assets/image/efficom.png',
    'https://loicduhamel.github.io/me/assets/image/epsi.png',
    'https://loicduhamel.github.io/me/assets/image/flunch.png',
    'https://loicduhamel.github.io/me/assets/image/french.png',
    'https://loicduhamel.github.io/me/assets/image/gcp.png',
    'https://loicduhamel.github.io/me/assets/image/gcp_certification.png',
    'https://loicduhamel.github.io/me/assets/image/gemo.png',
    'https://loicduhamel.github.io/me/assets/image/heroic_fantasy.gif',
    'https://loicduhamel.github.io/me/assets/image/ineat.png',
    'https://loicduhamel.github.io/me/assets/image/isefac.png',
    'https://loicduhamel.github.io/me/assets/image/kiabi.png',
    'https://loicduhamel.github.io/me/assets/image/logo.png',
    'https://loicduhamel.github.io/me/assets/image/loic_duhamel.png',
    'https://loicduhamel.github.io/me/assets/image/master_expert_ing_it_1.png',
    'https://loicduhamel.github.io/me/assets/image/master_expert_ing_it_2.png',
    'https://loicduhamel.github.io/me/assets/image/mon_imaginarium.png',
    'https://loicduhamel.github.io/me/assets/image/new_technologies.gif',
    'https://loicduhamel.github.io/me/assets/image/sad_marketing.png',
    'https://loicduhamel.github.io/me/assets/image/science_fiction.gif',
    'https://loicduhamel.github.io/me/assets/image/sensitization_environment.png',
    'https://loicduhamel.github.io/me/assets/image/sensitization_gdpr.png',
    'https://loicduhamel.github.io/me/assets/image/sensitization_gdpr_iso27001_niv1.png',
    'https://loicduhamel.github.io/me/assets/image/sensitization_gdpr_iso27001_niv2.png',
    'https://loicduhamel.github.io/me/assets/image/sensitization_quality.png',
    'https://loicduhamel.github.io/me/assets/image/space_news.gif',
    'https://loicduhamel.github.io/me/assets/image/st_paul.png',
    'https://loicduhamel.github.io/me/assets/image/titre_pro_cdi.png',
    'https://loicduhamel.github.io/me/assets/image/video_games.gif',
    'https://loicduhamel.github.io/me/assets/image/web_marketer.gif',
    'https://loicduhamel.github.io/me/assets/image/webpulser.png',
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

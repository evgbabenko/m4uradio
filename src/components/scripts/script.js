export default class Service {
    _link = `https://api.mixcloud.com/m4uradioua/cloudcasts/`;
    _show_link = 'https://api.mixcloud.com/m4uradioua/';
    _image_url = 'https://image.tmdb.org/t/p/original';

    _youtube_api_url='https://www.googleapis.com/youtube/v3/search?';
    _youtube_channelId='UCLu7ieilESQnmEkEXh3RUag';
    _youtube_key='AIzaSyDD3bkUA7KuJpHHm2AXbAogNZodC0k1JNA';
    _youtube_part='id,snippet';
    _youtube_order='date';
    _youtube_maxResults='20';

    async getPodcasts(offset) {
        const podcasts_list = await fetch(`${this._link}?limit=20&offset=${(offset === null || offset === undefined) ? 0 : offset}`);
        if (podcasts_list.status > 300 || podcasts_list.status < 199) {
            throw new Error(`Сталося помилка ${podcasts_list.status.text}:${podcasts_list.status}`);
        }
        return await podcasts_list.json();
    }
    async getShow(key) {

        const show = await fetch(`${this._show_link}${key}`);
        if (show.status > 300 || show.status < 199) {
            throw new Error(`Сталося помилка ${show.status.text}:${show.status}`);
        }
        return await show.json();
    }

    async getTrack(url) {
        let track = await fetch(url, {
            method: 'GET'
          });
        if (track.status > 300 || track.status < 199) {
            throw new Error(`Сталося помилка ${track.status.text}:${track.status}`);
        }
         let info = await track.json();
         return await info.icestats.source;
    }
    
    async getYoutubeVideos(){
        let url =`${this._youtube_api_url}channelId=${this._youtube_channelId}&key=${this._youtube_key}&part=${this._youtube_part}&order=${this._youtube_order}&maxResults=${this._youtube_maxResults}`;
        let videos = await fetch(url);
        if (videos.status > 300 || videos.status < 199) {
            throw new Error(`Сталося помилка ${videos.status.text}:${videos.status}`);
        }
        return await videos.json();
    }
}

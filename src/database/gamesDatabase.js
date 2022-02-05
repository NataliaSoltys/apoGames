import data from "../res/games.json"

export default class GamesDatabase
{
    games = [];
    
    constructor(){
        this.games = JSON.parse(JSON.stringify(data)).data;
    }

    getGames(){
        return this.games;
    }

    getGame(idk){
        return this.games.filter(g => g.id == idk);
    }

    getGamesRanking(){
        return this.games.sort(
            function(a, b){
            return b.ranking - a.ranking
        });
    }

    changeRank(id, vote){
        let game = this.games.find(e => e.id === id);
        game.ranking = vote;
    }

    getMostAwaited(){
        return this.games.filter(g => new Date(g.releaseDate) > new Date());
    }

    getMostAwarded(){
        return this.games.filter(g => g.plebiscite != 'none');
    }
}
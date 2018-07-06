//store the properties on an instance of the Article class. 
export class Article {
    title: string = '';
    links: string = '';
    votes: number;

    constructor(title: string, links: string, votes?: number) {
        this.title = title; //? is optional Parameter
        this.links = links;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }

    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar 
            const domainAndPath: string = this.links.split('//')[1];
            // e.g. foo.com/path/to/bar 
            return domainAndPath.split('/')[0];
        }
        catch (err) { return null; }
    }
}
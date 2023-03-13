export interface Post {
    id: string;
    title: String;
    description: String;
    content: String;
    date: String;
}

export class PostClass {
    id: string;
    title: String;
    description: String;
    content: String;
    date: String;

    constructor(id: string, title: string, description: string, content: string, date: string) {
        this.id = id
        this.title = title
        this.description = description
        this.content = content
        this.date = date
    }
}
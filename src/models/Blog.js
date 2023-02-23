import { Account } from "./Account"

export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.published = data.published
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.date = new Date(data.createdAt).toLocaleDateString()
    }
}

// new Account(data.creator)
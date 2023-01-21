class memory {
    constructor() {
        this.scores = []
        this.pageSize = 10
    }

    /** Add an object to the in memory storage */
    add(obj) {
        this.scores.push(obj)
    }

    /**
     * Returns a paginated list according to the specified page number
     */
    list(pageNumber = 1) {
        const page = this.scores.slice(
            (pageNumber - 1) * this.pageSize,
            pageNumber * this.pageSize
        )
        return {
            page,
            pageNumber,
            pageSize: this.pageSize,
            total: this.scores.length,
        }
    }

    /**
     * Returns a particular item by specified `key` i.e. field name
     * and `value` i.e. the actual value to retrieve.
     */
    get({ key, value }) {
        for (let i = 0; i < this.scores.length; i += 1) {
            const obj = this.scores[i]
            if (obj[key] === value) return obj
        }
        return null
    }
}

module.exports = new memory()

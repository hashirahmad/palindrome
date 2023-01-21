const memory = require('../../database/memory')

class listScores {
    // eslint-disable-next-line class-methods-use-this
    parse(rows) {
        return Array.from(rows).map((o) => ({
            name: String(o.name),
            points: Number(o.points),
        }))
    }

    /**
     * Returns an array of the top 5 scores, each consisting
     * of {name, points}, sorted descending.
     */
    topFive() {
        const sortedEntriesByPointsDesc = memory.scores.sort(
            (a, b) => Number(b.points) - Number(a.points)
        )
        const topFiveEntries = sortedEntriesByPointsDesc.slice(0, 5)
        const topFiveEntriesParsed = this.parse(topFiveEntries)
        return topFiveEntriesParsed
    }
}

module.exports = listScores

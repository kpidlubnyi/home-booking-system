class HotelAPI {
    static async fetchReviews() {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        const reviews = await res.json()
        
        const shuffled = reviews.sort(() => 0.5 - Math.random())
        const randomReviews = shuffled.slice(0, 3)

        return randomReviews.map(review => ({
            email: review.email,
            body: review.body
        }))
    }
}

module.exports = HotelAPI
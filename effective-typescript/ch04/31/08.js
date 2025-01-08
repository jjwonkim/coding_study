class UserPosts {
    user;
    posts;
    constructor() {
        this.user = null;
        this.posts = null;
    }
    async init(userId) {
        return Promise.all([
            async () => (this.user = await fetchUser(userId)),
            async () => (this.posts = await fetchPostsForUser(userId)),
        ]);
    }
    getUserName() {
        // ...?
    }
}
export default {};

class GitHub {
    constructor(){
        this.client_id = '5f110d5e65c2b4c4c3a1';
        this.client_secret = 'd8f6db8861879a21cfef476647d08c7f90d1c54f';
        this.repos_count = 5;
        this.repos_sourt = 'created: acs';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}
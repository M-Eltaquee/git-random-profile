class Profiles {
  constructor() {
    this.count = 5;
  }
  // get profiles
  async getProfile() {
    const response = await fetch(`https://randomuser.me/api/?results=${this.count}`)
    const profilesData = await response.json();
    return profilesData;
  }

}


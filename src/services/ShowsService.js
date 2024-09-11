import { dbContext } from "../db/DbContext.js"


class ShowsService {



  async getAllShows() {
    // const shows = await dbContext.Shows.find().populate('animal').populate('handler')
    // const shows = await dbContext.Shows.find().populate(['animal', 'handler'])
    // const shows = await dbContext.Shows.find().populate({ path: 'animal handler' })
    // const shows = await dbContext.Shows.find().populate('animal handler', 'name picture')
    const shows = await dbContext.Shows.find().populate('animal').populate('handler', 'name picture')
    return shows
  }
  async createShow(showData) {
    // const show = await (await (await dbContext.Shows.create(showData)).populate('animal')).populate('handler')
    const show = await dbContext.Shows.create(showData)
    await show.populate('animal')
    await show.populate('handler', 'name picture')
    return show
  }

  async getShowsByAnimalId(animalId) {
    // -------------------------------------{ animalId: '646637e6dfs7fgg8dfafsadf' }
    const shows = await dbContext.Shows.find({ animalId: animalId }).populate('animal').populate('handler', 'name picture')
    return shows
  }

  async getMyShows(userId) {
    const shows = await dbContext.Shows.find({ handlerId: userId }).populate('animal').populate('handler', 'name picture')
    return shows
  }
}

export const showsService = new ShowsService()

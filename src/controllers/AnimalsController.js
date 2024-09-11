import { animalsService } from "../services/AnimalsService.js";
import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";



export class AnimalsController extends BaseController {
  constructor() {
    super('api/animals')
    this.router
      .get('', this.getAllAnimals)
      .put('/:animalId', this.updateAnimal)
      .get('/:animalId/shows', this.getShowsByAnimalId)
  }

  async getAllAnimals(request, response, next) {
    try {
      const animals = await animalsService.getAllAnimals()
      response.send(animals)
    } catch (error) {
      next(error)
    }
  }

  async updateAnimal(request, response, next) {
    try {
      const animalId = request.params.animalId
      console.log('request params', request.params);
      // console.log('request', request);
      const updateData = request.body
      const animalUpdated = await animalsService.updateAnimal(animalId, updateData)
      response.send(animalUpdated)
    } catch (error) {
      next(error)
    }
  }

  async getShowsByAnimalId(request, response, next) {
    try {
      const animalId = request.params.animalId
      const shows = await showsService.getShowsByAnimalId(animalId)
      response.send(shows)
    } catch (error) {
      next(error)
    }
  }
}

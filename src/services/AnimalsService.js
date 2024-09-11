import { dbContext } from "../db/DbContext.js"


class AnimalsService {

  async getAllAnimals() {
    const animals = await dbContext.Animals.find()
    return animals
  }

  async updateAnimal(animalId, updateData) {
    const animalToUpdate = await dbContext.Animals.findById(animalId);
    console.log('updating', animalToUpdate);
    console.log('update Data', updateData);

    // animalToUpdate.name = updateData.name
    // NOTE all of these work for updating a value only if it is included, you only need one for each property
    if (updateData.emoji != undefined) animalToUpdate.emoji = updateData.emoji // if undefined
    if (updateData.emoji) animalToUpdate.emoji = updateData.emoji // if falsey
    animalToUpdate.emoji = updateData.emoji ? updateData.emoji : animalToUpdate.emoji // Turnary
    animalToUpdate.emoji = updateData.emoji ?? animalToUpdate.emoji // null
    animalToUpdate.talent = updateData.talent ?? animalToUpdate.talent
    console.log('post update', animalToUpdate);
    await animalToUpdate.save()

    return animalToUpdate
  }
}

export const animalsService = new AnimalsService()

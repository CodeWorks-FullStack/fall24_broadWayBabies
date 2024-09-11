import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { AnimalSchema } from '../models/Animal.js';
import { ShowSchema } from '../models/Show.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  Animals = mongoose.model('Animal', AnimalSchema)

  Shows = mongoose.model('Show', ShowSchema)
}

export const dbContext = new DbContext()

import { Auth0Provider } from "@bcwdev/auth0provider";
import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";


export class ShowsController extends BaseController {
  constructor() {
    super('api/shows')
    this.router
      .use((req, res, next) => {
        console.log('middleware!')
        next()
      })
      .get('', this.getAllShows)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createShow)
  }

  async getAllShows(request, response, next) {
    try {
      const shows = await showsService.getAllShows()
      response.send(shows)
    } catch (error) {
      next(error)
    }
  }

  async createShow(request, response, next) {
    try {
      const showData = request.body
      const user = request.userInfo
      console.log('creating', showData);
      console.log('user is', request.userInfo); // userInfo is only available after Auth0 middleware
      showData.handlerId = user.id // overwriting what ever was sent in the body, with the currently logged in user's id
      const show = await showsService.createShow(showData)
      response.send(show)
    } catch (error) {
      next(error)
    }
  }


}

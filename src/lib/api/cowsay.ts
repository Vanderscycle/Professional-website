import axios from 'axios';

export class clientRest{
  baseEndpoint:string
  constructor(url:string){ this.baseEndpoint = url}

  async getQuote(specificAddress: string) :Promise<any>{ 
    try {
      return await axios.get(`${this.urlEndpoint}/${specificAddress}`)
    
  } catch (e) {
    console.warn(e)    
  }
  }
  
}

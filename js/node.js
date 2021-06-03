import {Agenda} from "./agenda.js"

export class Node
{
    constructor(action, state, parent)
    {
        this.action = action
        this.state = state
        this.parent = parent
    }

    path()
    {
        if(this.parent === null)
           return [{action: null, state: this.state}]
        else
        {
            const h1 = this.parent.path()
            const h2 = {action: null, state: this.state}
            h1.push(h2)
            return h1
        }
    }

    inPath(s)
    {
        if(this.state === s)
          return true
        else if(this.parent === null)
          return false
        else
          return this.parent.inPath(s)
    }
}
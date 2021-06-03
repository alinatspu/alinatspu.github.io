import {Node} from "./node.js"
export function search(initialState, goalTest, actions, successor)
{
    const n1 = node(null, initialState, null)
    if(goalTest(initialState))
      return n1.path()
    const agenda = new Agenda()
    agenda.add(n1)
    while(agenda.notEmpty())
    {
        const parent = agenda.getNode()
        for(const action of actions(parent.state))
        {
            const newS = successor(parent.state, action)
            const newN = new Node(action, newS, parent)
            if(goalTest(newS))
              return newN.path()
            if(!parent.inPath(newS))
            {
               agenda.add(newN)
            }
        }
    }

   return null
}
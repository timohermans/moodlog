import { TripleColumnThought } from '.prisma/client'
import React from 'react'

interface Props {
  thoughts: TripleColumnThought[]
}

const TripleThoughtList = (props: Props) => {
  if (!props.thoughts) return null
  return (
    <div className="mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-xs font-medium text-gray-500 py-3 px-6 text-left uppercase">
              Date
            </th>
            <th className="text-xs font-medium text-gray-500 py-3 px-6 text-left uppercase">
              Automatic Thought
            </th>
            <th className="text-xs font-medium text-gray-500 py-3 px-6 text-left uppercase">
              Cognitive Distortion
            </th>
            <th className="text-xs font-medium text-gray-500 py-3 px-6 text-left uppercase">
              Rationale Response
            </th>
          </tr>
        </thead>
        <tbody className="bg-white" data-cy="thought-list">
          {props.thoughts.map((thought: TripleColumnThought) => (
            <tr key={thought.id}>
              <td className="py-3 px-6 whitespace-nowrap">
                {new Date(thought.createdAt).toLocaleString()}
              </td>
              <td className="py-3 px-6 whitespace-nowrap">
                {thought.automaticThought}
              </td>
              <td className="py-3 px-6 whitespace-nowrap">
                {thought.cognitiveDistortion}
              </td>
              <td className="py-3 px-6 whitespace-nowrap">
                {thought.rationaleResponse}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TripleThoughtList
